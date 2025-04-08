"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { schemaLogin, schemaRegister } from "@/schemas";
import { loginUserService, registerUserService } from "../services/authServices";

const config = {
  maxAge: 60 * 60 * 24 * 7,
  path: "/",
  domain: process.env.HOST ?? "localhost",
  httpOnly: false,
  secure: process.env.NODE_ENV === "production",
};

export async function registerUserAction(prevState: any, formData: FormData) {
  const validatedFields = schemaRegister.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    repeatPassword: formData.get("repeatPassword"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      strapiErrors: null,
      message: "Faltan campos. Error de registro.",
    };
  }

  const { repeatPassword, ...userData } = validatedFields.data;
  const responseData = await registerUserService(userData);

  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: null,
      zodErrors: null,
      message: "¡Ops! Algo ha ido mal. Por favor, inténtelo de nuevo.",
    };
  }

  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Fallo en el registro.",
    };
  }

  const cookieStore = await cookies();
  cookieStore.set("jwt", responseData.jwt, config);

  if (responseData.adminJwt) {
    cookieStore.set("jwtToken", responseData.adminJwt, config);
  }

  redirect("/");
}

export async function loginUserAction(prevState: any, formData: FormData) {
  const validatedFields = schemaLogin.safeParse({
    identifier: formData.get("identifier"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Faltan campos. Error al iniciar sesión.",
    };
  }

  const responseData = await loginUserService(validatedFields.data);
  
  if (!responseData) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "¡Ops! Algo ha ido mal. Por favor, inténtelo de nuevo.",
    };
  }
  
  if (responseData.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Fallo en el ingreso.",
    };
  }
  
  const cookieStore = await cookies();
  cookieStore.set("jwt", responseData.jwt, config);

  if (responseData.adminJwt) {
    cookieStore.set("jwtToken", responseData.adminJwt, config);
  }

  redirect("/");
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.set("jwt", "", { ...config, maxAge: 0 });
  redirect("/");
}
