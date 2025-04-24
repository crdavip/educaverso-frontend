const { API_BASE_URL, API_AUTH_TOKEN } = process.env;

interface ContactProps {
  rating: number;
  reviewed: string;
  reviewer: string;
  description: string;
}

const baseUrl = `${API_BASE_URL}/api/`;

export async function reviewService(formData: ContactProps) {
  const url = new URL("reviews", baseUrl);

  const reviewData = {
    rating: formData.rating,
    reviewed: formData.reviewed,
    reviewer: formData.reviewer,
    description: formData.description,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_AUTH_TOKEN}`,
      },
      body: JSON.stringify({ data: reviewData }),
    });

    const jsonResponse = await response.json();
    if (!response.ok || jsonResponse.error) {
      console.error("Review Error:", jsonResponse.error);
      return { error: jsonResponse.error || "Error al crear reseña" };
    }

    return jsonResponse;
  } catch (error) {
    console.error("Review Error:", error);
    return { error: "Error al crear reseña" };
  }
}
