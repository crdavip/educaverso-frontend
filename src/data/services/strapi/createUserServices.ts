import { ValidGenders } from "@/interfaces";

const { API_BASE_URL, API_AUTH_TOKEN } = process.env;

interface CreateUserProps {
  user: number;
  firstname: string;
  lastname: string;
  category: number;
  profession: string;
  gender: ValidGenders;
  profileImage?: File;
  description?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
}

const baseUrl = `${API_BASE_URL}/api/`;

export async function uploadImage(image: File) {
  const uploadUrl = new URL("upload", baseUrl);
  const formData = new FormData();
  formData.append("files", image);

  try {
    const response = await fetch(uploadUrl, {
      method: "POST",
      headers: { Authorization: `Bearer ${API_AUTH_TOKEN}` },
      body: formData,
    });

    const result = await response.json();
    if (!response.ok || result.error) {
      console.error("Image Upload Error:", result.error);
      return null;
    }

    return result[0]?.id || null;
  } catch (error) {
    console.error("Upload Service Error:", error);
    return null;
  }
}

export async function createUserService(userData: CreateUserProps) {
    const url = new URL("user-details", baseUrl);
  
    let profileImageId: number | null = null;
    if (userData.profileImage) {
      profileImageId = await uploadImage(userData.profileImage);
    }
  
    const userDetails = {
      firstname: userData.firstname,
      lastname: userData.lastname,
      profession: userData.profession,
      gender: userData.gender,
      description: userData.description,
      category: userData.category,
      profileImage: profileImageId ? { id: profileImageId } : undefined,
      user: userData.user,
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_AUTH_TOKEN}`,
        },
        body: JSON.stringify({ data: userDetails }),
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
