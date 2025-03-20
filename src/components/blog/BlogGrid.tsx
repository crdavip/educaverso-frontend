import { Grid2 as Grid } from "@mui/material";
import { Blog } from "@/interfaces";
import { BlogCard } from "./BlogCard";
import styles from './blog.module.scss'

interface Props {
  blogs: Blog[];
}

export const BlogGrid = ({ blogs }: Props) => {
  return (
    <Grid container spacing={3} className={styles.courses}>
      {blogs.map((blog) => (
        <Grid key={blog.documentId} size={{ xs: 12, sm: 6, lg: 4 }}>
          <BlogCard blog={blog} />
        </Grid>
      ))}
    </Grid>
  );
};
