import { Suspense } from "react";
import ExplorarPage from "@/components/explorer/ExplorarPage";
import { getCategories } from "@/data";

export default async function ServerExplorerPage() {
  const categories = await getCategories();
  return (
    <Suspense fallback={<div>Cargando explorador...</div>}>
      <ExplorarPage categories={categories} />
    </Suspense>
  )
}
