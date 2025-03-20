"use client";

import { useState } from "react";
import {
  LibraryBooksOutlined,
  CollectionsOutlined,
  NewspaperOutlined,
  ChatOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab, useMediaQuery, useTheme } from "@mui/material";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { CertificationGrid } from "@/components/certifications/CertificationGrid";
import { CourseGrid } from "@/components/course/CourseGrid";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { EmptyContent } from "./EmptyContent";
import { ReviewGrid } from "@/components/review/ReviewGrid";
import { Blog, Certificate, Course, Portfolio, Review } from "@/interfaces";
import styles from "./usercontent.module.scss";

interface Props {
  courses: Course[];
  portfolios: Portfolio[];
  blogs: Blog[];
  reviews: Review[];
  certificates: Certificate[];
}

export const TabContent = ({courses, portfolios, blogs, reviews, certificates}: Props) => {
  const [value, setValue] = useState("1");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value}>
      <Box className={styles.contentHeader} sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList
          variant={isMobile ? "scrollable" : "fullWidth"}
          onChange={handleChange}
          aria-label="Contenido por usuario"
        >
          <Tab icon={<LibraryBooksOutlined />} label={`Cursos (${courses.length})`} value="1" />
          <Tab icon={<CollectionsOutlined />} label={`Portafolio (${portfolios.length})`} value="2" />
          <Tab icon={<NewspaperOutlined />} label={`Blogs (${blogs.length})`} value="3" />
          <Tab icon={<ChatOutlined />} label={`Testimonios (${reviews.length})`} value="4" />
          <Tab icon={<WorkspacePremiumOutlined />} label={`Certificados (${certificates.length})`} value="5" />
        </TabList>
      </Box>
      <TabPanel value="1">
        {courses.length === 0 ? <EmptyContent title="Cursos" /> : <CourseGrid courses={courses} />}
      </TabPanel>
      <TabPanel value="2">
        {portfolios.length === 0 ? <EmptyContent title="Portafolio" /> : <PortfolioGrid portfolios={portfolios} />}
      </TabPanel>
      <TabPanel value="3">
        {blogs.length === 0 ? <EmptyContent title="Blogs" /> : <BlogGrid blogs={blogs} />}
        </TabPanel>
      <TabPanel value="4">
        {reviews.length === 0 ? <EmptyContent title="Testimonios" /> : <ReviewGrid reviews={reviews} />}
      </TabPanel>
      <TabPanel value="5">
        {certificates.length === 0 ? <EmptyContent title="Certificados" /> : <CertificationGrid certificates={certificates} />}
      </TabPanel>
    </TabContext>
  );
};
