import { Box } from "@mui/material";
import { Blog, Certificate, Course, Portfolio, Review } from "@/interfaces";
import { TabContent } from "./TabContent";
import { getBlogsByUser, getCertificatesByUser, getPortfoliosByUser, getReviewsByUser } from "@/lib";
import { initialDataCourse } from "@/seed/seedCourse";
import styles from "./usercontent.module.scss";

interface Props {
  idUser: string;
}

export const UserContent = async ({ idUser }: Props) => {
  const courses: Course[] = initialDataCourse.courses ?? [];
  const portfolios: Portfolio[] = await getPortfoliosByUser(idUser) ?? [];
  const blogs: Blog[] = await getBlogsByUser(idUser) ?? [];
  const reviews: Review[] = await getReviewsByUser(idUser) ?? [];
  const certificates: Certificate[] = await getCertificatesByUser(idUser) ?? [];

  return (
    <Box className={styles.contentContainer}>
      <TabContent courses={courses} portfolios={portfolios} blogs={blogs} reviews={reviews} certificates={certificates} />
    </Box>
  );
};
