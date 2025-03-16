import Image from "next/image";
import { AccessTimeOutlined } from "@mui/icons-material";
import { Card, CardContent, Typography, Grid2 as Grid, Box, Chip } from "@mui/material";
import { Blog } from "@/interfaces";
import { timeAgo, truncateText } from "@/helpers";
import styles from "./blog.module.scss";

interface Props {
  blog: Blog;
}

export const BlogCard = ({ blog }: Props) => {
  return (
    <Card className={styles.blogCard}>
      <CardContent className={styles.blogCardHeader}>
        <Image src={`/blogs/${blog.image}`} alt={blog.title} width={300} height={300} />
        <Box className={styles.blogCardHeaderBg}>
          <Typography variant="h6" fontWeight={700}>
            {blog.title}
          </Typography>
        </Box>
      </CardContent>
      <CardContent className={styles.blogCardContent}>
        <Chip variant="filled" color="primary" size="small" label={timeAgo(blog.created_at)} />
        <Box className={styles.blogDescription}>
          <Typography variant="body1" lineHeight={1.1}>{truncateText(blog.description, 75)}</Typography>
        </Box>
        <Grid display="flex" alignItems="center" gap={2}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Chip icon={<AccessTimeOutlined color="secondary" fontSize="small" />} label={`${blog.duration}min`} size="small" />
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
};
