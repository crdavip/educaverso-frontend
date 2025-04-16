const { API_COURSES_URL } = process.env;

interface RegisterUserProps {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  documentId: string;
  profileImage?: string;
}

const baseUrl = `${API_COURSES_URL}/v1/`;

export async function registerUser(userData: RegisterUserProps) {
  const url = new URL("auth/sign-up", baseUrl);

  const userDetails = {
    name: `${userData.firstname} ${userData.lastname}`,
    email: userData.email,
    password: userData.password,
    hasAcceptedPolicy: true,
    documentId: userData.documentId,
    profilePicture: userData.profileImage,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });

    const jsonResponse = await response.json();
    if (!response.ok || jsonResponse.error) {
      console.error("User Registration Error:", jsonResponse.error);
      return { error: jsonResponse.error || "Error al registrar el usuario" };
    }

    return jsonResponse;
  } catch (error) {
    console.error("User Registration Error:", error);
    return { error: "Error al registrar el usuario" };
  }
}
