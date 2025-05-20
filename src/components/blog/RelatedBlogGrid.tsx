import { Grid2 as Grid } from "@mui/material";
import { BlogCard } from "./BlogCard";
import { EmptyContent } from "../user/user-content/EmptyContent";

import { getBlogsRelatedByCategory } from "@/data";
import { Blog } from "@/interfaces";

interface Props {
  category: string;
  idBlog: string;
}

export const RelatedBlogGrid = async ({ category, idBlog }: Props) => {
  const { data } = await getBlogsRelatedByCategory(category, idBlog);
  const blogs: Blog[] = data;

  return (
    <Grid container spacing={2}>
      {blogs.length === 0 && <EmptyContent text="No hay blogs relacionados a esta categoría" /> }
      {blogs.length > 0 && blogs.map((blog) => (
        <Grid key={blog.documentId} size={{ xs: 12 }}>
          <BlogCard blog={blog} />
        </Grid>
      ))}
    </Grid>
  );
};
