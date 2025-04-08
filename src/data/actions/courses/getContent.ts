import { queryCourses } from "./courses";

export const getCoursesByUser = async (idUser: string) => {
  const { payload } = await queryCourses(`course/${idUser}/courses-by-instructor`);
  return payload;
}
