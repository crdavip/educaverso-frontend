import Link from "next/link";
import Image from "next/image";
import { AccessTimeOutlined, ZoomOutMap } from "@mui/icons-material";
import { Card, CardContent, Typography, Grid2 as Grid, Box, Chip, IconButton } from "@mui/material";
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
        <Image src={blog.image.url} alt={blog.title} width={300} height={300} />
        <Box className={styles.blogCardHeaderBg}>
          <Link href={`/blog/${blog.slug}`}>
            <Typography variant="h6" fontWeight={700}>
              {blog.title}
            </Typography>
          </Link>
        </Box>
      </CardContent>
      <CardContent className={styles.blogCardContent}>
        <Chip variant="filled" color="primary" size="small" label={timeAgo(new Date(blog.createdAt))} />
        <Box className={styles.blogDescription}>
          <Typography variant="body1" lineHeight={1.1}>{truncateText(blog.description, 75)}</Typography>
        </Box>
        <Grid display="flex" alignItems="center" gap={2}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Chip icon={<AccessTimeOutlined color="secondary" fontSize="small" />} label={`${blog.duration}min`} size="small" />
          </Box>
        </Grid>
        <Link href={`/blog/${blog.slug}`}>
          <IconButton className={styles.zoomButton} aria-label="Zoom image">
              <ZoomOutMap color="secondary" fontSize="large" />
          </IconButton>
        </Link>
      </CardContent>
    </Card>
  );
};
