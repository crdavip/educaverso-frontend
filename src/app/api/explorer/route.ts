import { NextRequest, NextResponse } from "next/server";
import { getAllContent } from "@/data";
import { contentTypesConfig } from "@/config/contentTypesConfig";
import { ContentTypeConfig } from "@/interfaces";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const search = searchParams.get("search") || "";
  const contentTypes = searchParams.getAll("contentTypes") || ["user-details", "portfolios", "blogs"];
  const categories = searchParams.getAll("categories") || [];
  const rawSortBy = searchParams.get("sortBy");
  const sortBy = rawSortBy === "ASC" || rawSortBy === "DESC" ? rawSortBy : "DESC";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("pageSize") || "10", 10);

  try {
    const results = await getAllContent({
      search,
      categories,
      contentTypes,
      sortBy,
      page,
      pageSize,
    });

    const sorted = results.data.sort((a, b) =>
      sortBy === "ASC"
        ? new Date(a.date).getTime() - new Date(b.date).getTime()
        : new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const formatted = sorted.map((item: any) => {
      const config: ContentTypeConfig = contentTypesConfig[item.type];
    
      return {
        documentId: item.documentId,
        category: config.getCategory(item),
        type: config.label,
        title: config.getTitle(item),
        image: config.getImage(item),
        createdAt: item.createdAt,
        slug: config.getSlug(item),
        url: config.getUrl(item),
        author: config.getAuthor(item),
      };
    });

    const start = (page - 1) * pageSize;
const end = start + pageSize;
const paginated = formatted.slice(start, end);

return NextResponse.json({ total: results.total, data: paginated });
  } catch (err: any) {
    console.error("Error in /api/explorer:", err?.message || err);
    return NextResponse.json({ error: "Error fetching content from Strapi" }, { status: 500 });
  }
}
