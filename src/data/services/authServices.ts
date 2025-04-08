const { API_BASE_URL } = process.env;

interface RegisterUserProps {
  username: string;
  password: string;
  email: string;
}

interface LoginUserProps {
  identifier: string;
  password: string;
}

const baseUrl = `${API_BASE_URL}/api/`;

export async function registerUserService(userData: RegisterUserProps) {
  const url = new URL("auth/local/register", baseUrl);

  const response = await fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (response.ok && data.user) {
    const adminLogin = await fetch(`${API_BASE_URL}/admin/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    });

    const adminData = await adminLogin.json();

    if (adminLogin.ok && adminData.data?.token) {
      return {
        ...data,
        adminJwt: adminData.data.token,
      };
    }
  }

  return data;
}

export async function loginUserService(userData: LoginUserProps) {
  const url = new URL("auth/local", baseUrl);

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const data = await response.json();

  if (response.ok && data.user) {
    const adminLogin = await fetch(`${API_BASE_URL}/admin/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userData.identifier,
        password: userData.password,
      }),
    });

    const adminData = await adminLogin.json();

    if (adminLogin.ok && adminData.data?.token) {
      return {
        ...data,
        adminJwt: adminData.data.token,
      };
    }
  }

  return data;
}
