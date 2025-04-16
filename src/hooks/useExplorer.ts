import { useEffect, useState } from "react";
import { ReadonlyURLSearchParams } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { ApiResponse } from "@/interfaces";

interface Props {
  searchParams: ReadonlyURLSearchParams;
  pathname: string;
  router: AppRouterInstance;
}

export const useExplorer = ({ searchParams, pathname, router }: Props) => {
  const [type, setType] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"ASC" | "DESC">("DESC");
  const [search, setSearch] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [apiData, setApiData] = useState<ApiResponse>({ total: 0, data: [] });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();

        if (search) params.set("search", search);

        const contentTypesToSend = type === "all" ? ["user-details", "portfolios", "blogs"] : [type];

        params.delete("contentTypes");
        contentTypesToSend.forEach((t) => params.append("contentTypes", t));

        selectedCategories.forEach((c) => params.append("categories", c));
        params.set("sortBy", sortBy);
        params.set("page", page.toString());
        params.set("pageSize", "9");

        const res = await fetch(`/api/explorer?${params.toString()}`);
        const data = await res.json();
        setApiData(data);

        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, sortBy, search, selectedCategories, page, pathname, router]);

  useEffect(() => {
    const urlSearch = searchParams.get("search") || "";
    const urlContentTypes = searchParams.getAll("contentTypes");
    const urlType =
      urlContentTypes.length === 3 || urlContentTypes.includes("all") ? "all" : urlContentTypes[0] || "all";
    const urlCategories = searchParams.getAll("categories") || [];
    const urlSortBy = searchParams.get("sortBy") === "ASC" ? "ASC" : "DESC";
    const urlPage = parseInt(searchParams.get("page") || "1", 10);

    if (urlSearch !== search) setSearch(urlSearch);
    if (urlType !== type) setType(urlType);
    if (JSON.stringify(urlCategories) !== JSON.stringify(selectedCategories)) {
      setSelectedCategories(urlCategories);
    }
    if (urlSortBy !== sortBy) setSortBy(urlSortBy);
    if (urlPage !== page) setPage(urlPage);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setPage(1);
  };

  const handleChangeType = (event: React.MouseEvent<HTMLElement>, newType: string) => {
    if (newType) {
      setType(newType);
      setPage(1);
    }
  };

  const handleChangeOrder = (event: React.MouseEvent<HTMLElement>, newOrder: string) => {
    if (newOrder === "ASC" || newOrder === "DESC") {
      setSortBy(newOrder);
    }
  };

  const handleCategoryToggle = (categorySlug: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categorySlug) ? prev.filter((slug) => slug !== categorySlug) : [...prev, categorySlug]
    );
    setPage(1);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return {
    type,
    sortBy,
    search,
    selectedCategories,
    page,
    loading,
    apiData,
    handleSearchChange,
    handleChangeType,
    handleChangeOrder,
    handleCategoryToggle,
    handlePageChange,
  };
};
