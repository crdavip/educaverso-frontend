const { API_BASE_URL, API_AUTH_TOKEN } = process.env;

const baseUrl = `${API_BASE_URL}/api/`;

export async function updateProfileViews(idUser: string, currentViews: number) {
  const url = new URL(`user-details/${idUser}`, baseUrl);

  const newViews = currentViews + 1;

  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_AUTH_TOKEN}`,
      },
      body: JSON.stringify({
        data: {
          profileViews: newViews,
        },
      }),
    });

    const jsonResponse = await response.json();
    if (!response.ok || jsonResponse.error) {
      console.error("Icrement Profile View Error:", jsonResponse.error);
      return { error: jsonResponse.error || "Error al incrementar la vista" };
    }

    return jsonResponse;
  } catch (error) {
    console.error("Icrement Profile View Error:", error);
    return { error: "Error al incrementar la vista" };
  }
}
