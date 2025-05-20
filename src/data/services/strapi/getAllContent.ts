import qs from "qs";
import { queryStrapi } from "@/data/actions/strapi/strapi";
import { contentTypesConfig } from "@/config/contentTypesConfig";

interface GetAllContentParams {
  search?: string;
  categories?: string[];
  contentTypes: string[];
  sortBy?: "ASC" | "DESC";
  page?: number;
  pageSize?: number;
};

export async function getAllContent({
  search = "",
  categories = [],
  contentTypes,
  sortBy = "DESC",
}: GetAllContentParams) {
  const allResults: any[] = [];
  let total = 0;

  const contentTypesToFetch =
    contentTypes.includes("all") ? Object.keys(contentTypesConfig) : contentTypes;

  for (const type of contentTypesToFetch) {
    const config = contentTypesConfig[type];
    if (!config) continue;

    const filters: any = {};

    if (search) {
      filters.$or = config.searchFields.map((field) => {
        const parts = field.split(".");
        return parts.length === 1
          ? { [field]: { $containsi: search } }
          : { [parts[0]]: { [parts[1]]: { $containsi: search } } };
      });
    }

    if (categories.length > 0) {
      if (type === "user-details") {
        filters.category = {
          slug: { $in: categories },
        };
      } else {
        filters.userDetail = {
          category: {
            slug: { $in: categories },
          },
        };
      }
    }

    const query = qs.stringify(
      {
        filters,
        sort: [`createdAt:${sortBy.toLowerCase()}`],
        populate: config.populate,
      },
      { encodeValuesOnly: true }
    );

    const res = await queryStrapi(`${type}?${query}`);

    if (!res.error) {
      const items = res.data.map((entry: any) => ({
        ...entry,
        type,
        date: entry.createdAt ?? entry.publishedAt,
      }));

      allResults.push(...items);
      total += res.meta?.pagination?.total || 0;
    }
  }

  return { data: allResults, total };
}
