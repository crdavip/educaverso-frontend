const { API_BASE_URL, API_AUTH_TOKEN } = process.env;

interface ContactProps {
  fullname: string;
  email: string;
  phone: number;
}

const baseUrl = `${API_BASE_URL}/api/`;

export async function contactService(userData: ContactProps) {
  const url = new URL("contacts", baseUrl);

  const contactData = {
    fullname: userData.fullname,
    email: userData.email,
    phone: userData.phone,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_AUTH_TOKEN}`,
      },
      body: JSON.stringify({ data: contactData }),
    });

    const jsonResponse = await response.json();
    if (!response.ok || jsonResponse.error) {
      console.error("Contact Error:", jsonResponse.error);
      return { error: jsonResponse.error || "Error al contactar" };
    }

    return jsonResponse;
  } catch (error) {
    console.error("Contact Error:", error);
    return { error: "Error al contactar" };
  }
}
