const { API_COURSES_URL } = process.env;

export const queryCourses = async (url: string, method: string = "GET") => {
  try {
    const res = await fetch(`${API_COURSES_URL}/v1/${url}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return { error: "Error internal server." };
  }
};
