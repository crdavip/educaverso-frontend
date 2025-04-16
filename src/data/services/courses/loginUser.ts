const { API_COURSES_URL } = process.env;

interface LoginUserProps {
  identifier: string;
  password: string;
}

const baseUrl = `${API_COURSES_URL}/v1/`;

export async function loginUser(userData: LoginUserProps) {
  const url = new URL("auth/log-in", baseUrl);

  const userDetails = {
    email: userData.identifier,
    password: userData.password,
    method: "Email",
    roleId: 3,
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
      console.error("User Login Error:", jsonResponse.error);
      return { error: jsonResponse.error || "Error al registrar el usuario" };
    }

    return jsonResponse;
  } catch (error) {
    console.error("User Login Error:", error);
    return { error: "Error al ingresar el usuario" };
  }
}
