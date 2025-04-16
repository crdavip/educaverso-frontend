"use server";

import { redirect } from "next/navigation";
import { createUserService } from "@/data/services/strapi/createUserServices";
import { getUserMeLoader } from "@/data/services/getUserMeLoader";
import { schemaUser } from "@/schemas";

export async function createUserAction(prevState: any, formData: FormData) {

  const user = await getUserMeLoader();

  const validatedFields = schemaUser.safeParse({
    user: user.data?.id,
    firstname: formData.get("firstname"),
    lastname: formData.get("lastname"),
    category: Number(formData.get("category")),
    profession: formData.get("profession"),
    gender: formData.get("gender"),
    profileImage: formData.get("profileImage"),
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      message: "Faltan campos. Error de registro.",
    };
  }

  const responseData = await createUserService(validatedFields.data);

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: null,
      zodErrors: null,
      message: "Ops! Something went wrong. Please try again.",
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Failed to Register.",
    };
  }

  redirect("/");
}
