const { API_BASE_URL, API_AUTH_TOKEN } = process.env;

export const query = async (url: string, method: string = "GET") => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/${url}`, {
      method: method,
      headers: {
        Authorization: `Bearer ${API_AUTH_TOKEN}`,
      },
    });
    return await res.json();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return { error: "Error internal server." };
  }
};
