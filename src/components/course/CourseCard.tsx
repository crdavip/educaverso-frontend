"use client";

import Link from "next/link";
import Image from "next/image";
import { AccessTimeOutlined, Star, StarBorder, StarHalf } from "@mui/icons-material";
import { Card, CardContent, Typography, Grid2 as Grid, Box, Chip } from "@mui/material";
import { Course } from "@/interfaces";
import styles from './course.module.scss'

const levelIcons = {
  Principiante: <StarBorder fontSize="small" color="secondary"/>,
  Intermedio: <StarHalf fontSize="small" color="secondary"/>,
  Avanzado: <Star fontSize="small" color="secondary"/>,
};

interface Props {
  course: Course;
}

export const CourseCard = ({ course }: Props) => {
  return (
    <Card className={styles.courseCard}>
      <CardContent className={styles.courseCardHeader}>
        <Link href={course.url} target="_blank">
          <Image src={`/courses/${course.image}`} alt={course.title} width={300} height={300} />
        </Link>
      </CardContent>
      <CardContent className={styles.courseCardContent}>
        <Link href={course.url} target="_blank">
          <Typography variant="body1" component="h6" fontWeight={700}>
            {course.title}
          </Typography>
        </Link>
        <Grid display="flex" alignItems="center" gap={2}>
          <Box sx={{display: "flex", alignItems: "center", gap: 0.5}}>
            <Chip icon={<AccessTimeOutlined color="secondary" fontSize="small" />} label={`${course.duration}min`} size="small"/>
          </Box>
          <Box sx={{display: "flex", alignItems: "center", gap: 0.5}}>
            <Chip color="primary" icon={levelIcons[course.level]} label={course.level} size="small"/>
          </Box>
        </Grid>
        <Box fontWeight={700} sx={{ mt: 2 }}>
          {course.price === 0 ? `GRATIS` : `$ ${course.price.toLocaleString("ES-co")}`}
        </Box>
      </CardContent>
    </Card>
  );
};
