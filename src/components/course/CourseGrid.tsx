import { Grid2 as Grid } from "@mui/material";
import { Course } from "@/interfaces";
import { CourseCard } from "./CourseCard";
import styles from './course.module.scss';

interface Props {
  courses: Course[];
}

export const CourseGrid = ({ courses }: Props) => {
  return (
    <Grid container spacing={3} className={styles.courses}>
      {courses.map((course) => (
        <Grid key={course.courseId} size={{ xs: 12, sm: 6, lg: 4 }}>
            <CourseCard course={course} />
        </Grid>
      ))}
    </Grid>
  );
};
