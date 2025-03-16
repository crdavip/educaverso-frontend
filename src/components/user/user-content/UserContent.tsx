"use client";

import { useState } from "react";
import { Box, Tab, useMediaQuery, useTheme } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  ChatOutlined,
  CollectionsOutlined,
  LibraryBooksOutlined,
  NewspaperOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import { Blog, Certification, Course, Portfolio, Testimonial } from "@/interfaces";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { CourseGrid } from "@/components/course/CourseGrid";
import styles from "./usercontent.module.scss";
import { TestimonialGrid } from "@/components/testimonial/TestimonialGrid";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { CertificationGrid } from "@/components/certifications/CertificationGrid";
import { EmptyContent } from "./EmptyContent";

interface Props {
  courses?: Course[];
  portfolios?: Portfolio[];
  blogs?: Blog[];
  testimonials?: Testimonial[];
  certifications?: Certification[];
}

export const UserContent = ({
  courses = [],
  portfolios = [],
  testimonials = [],
  blogs = [],
  certifications = [],
}: Props) => {
  const [value, setValue] = useState("1");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box className={styles.contentContainer}>
      <TabContext value={value}>
        <Box className={styles.contentHeader} sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList variant={isMobile ? "scrollable" : "fullWidth"} onChange={handleChange} aria-label="Contenido por usuario">
            <Tab icon={<LibraryBooksOutlined />} label={`Cursos (${courses.length})`} value="1" />
            <Tab icon={<CollectionsOutlined />} label={`Portafolio (${portfolios.length})`} value="2" />
            <Tab icon={<NewspaperOutlined />} label={`Blogs (${blogs.length})`} value="3" />
            <Tab icon={<ChatOutlined />} label={`Testimonios (${testimonials.length})`} value="4" />
            <Tab icon={<WorkspacePremiumOutlined />} label={`Certificados (${certifications.length})`} value="5" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {
            courses.length === 0
              ? <EmptyContent title="Cursos" />
              : <CourseGrid courses={courses} />
          }
        </TabPanel>
        <TabPanel value="2">
          {
            portfolios.length === 0
              ? <EmptyContent title="Portafolio" />
              : <PortfolioGrid portfolios={portfolios} />
          }
        </TabPanel>
        <TabPanel value="3">
          {
            blogs.length === 0
              ? <EmptyContent title="Blogs" />
              : <BlogGrid blogs={blogs} />
          }
        </TabPanel>
        <TabPanel value="4">
          {
            testimonials.length === 0
              ? <EmptyContent title="Testimonios" />
              : <TestimonialGrid testimonials={testimonials} />
          }
        </TabPanel>
        <TabPanel value="5">
          {
            certifications.length === 0
              ? <EmptyContent title="Certificados" />
              : <CertificationGrid certifications={certifications} />
          }
        </TabPanel>
      </TabContext>
    </Box>
  );
};
