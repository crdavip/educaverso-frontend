"use client";

import Link from "next/link";
import Image from "next/image";
import { AccessTimeOutlined, Star, StarBorder, StarHalf } from "@mui/icons-material";
import { Card, CardContent, Typography, Grid2 as Grid, Box, Chip } from "@mui/material";
import { Course } from "@/interfaces";
import { formatTime, formatPrice } from "@/helpers";
import styles from './course.module.scss'

const levelIcons = {
  junior: <StarBorder fontSize="small" color="secondary"/>,
  mid: <StarHalf fontSize="small" color="secondary"/>,
  senior: <Star fontSize="small" color="secondary"/>,
};

const levelText = {
  junior: "Principiante",
  mid: "Intermedio",
  senior: "Avanzado",
}

interface Props {
  course: Course;
}

export const CourseCard = ({ course }: Props) => {
  const isCourseFree = Number(course.originalPrice) === 0 || Number(course.priceWithDiscount) === 0 || Number(course.discountPercentage) === 1;

  const subtractDiscount = () => {
    let result
    if(course.discountPercentage) {
      result = Number(course.originalPrice) - (Number(course.originalPrice) * Number(course.discountPercentage))
    }
    return result
  };
  return (
    <Card className={styles.courseCard}>
      <CardContent className={styles.courseCardHeader}>
        <Link href={`${process.env.NEXT_PUBLIC_FRONT_COURSES_URL}/courses/details/${course.courseId}`} target="_blank">
          <Image src={`https://${process.env.NEXT_PUBLIC_AZURE_STORAGE_ACCOUNT}.blob.core.windows.net/course-images/${course.mainImage}`} alt={course.name} width={300} height={300} />
        </Link>
      </CardContent>
      <CardContent className={styles.courseCardContent}>
        <Link href={`${process.env.NEXT_PUBLIC_FRONT_COURSES_URL}/courses/details/${course.courseId}`} target="_blank">
          <Typography variant="body1" component="h6" fontWeight={700}>
            {course.name.toLowerCase()}
          </Typography>
        </Link>
        <Grid display="flex" alignItems="center" gap={2}>
          <Box sx={{display: "flex", alignItems: "center", gap: 0.5}}>
            <Chip icon={<AccessTimeOutlined color="secondary" fontSize="small" />} label={`${formatTime(course.durationInSeconds)}`} size="small"/>
          </Box>
          <Box sx={{display: "flex", alignItems: "center", gap: 0.5}}>
            <Chip color="primary" icon={levelIcons[course.experienceLevel]} label={levelText[course.experienceLevel]} size="small"/>
          </Box>
        </Grid>
        <Box fontWeight={700} sx={{ mt: 2 }}>
          {isCourseFree ? `Gratis` : `${formatPrice(subtractDiscount())}`}
          {Number(course.discountPercentage) > 0 ? <span className={styles.discount}>{formatPrice(Number(course.originalPrice))}</span> : null}
        </Box>
      </CardContent>
    </Card>
  );
};
