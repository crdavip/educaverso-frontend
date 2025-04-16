"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { schemaLogin, schemaRegister } from "@/schemas";
import { loginUserService, registerUserService } from "../services/authServices";
import { createUserService, uploadImage } from "../services/strapi/createUserServices";
import { registerUser } from "../services/courses/registerUser";
import { Image, PayloadCourse } from "@/interfaces";
import { loginUser } from "../services/courses/loginUser";

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

  const newUser = {
    username: validatedFields.data.username,
    email: validatedFields.data.email,
    password: validatedFields.data.password,
  };

  const responseData = await registerUserService(newUser);

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

  const responseUpload = await uploadImage(validatedFields.data.profileImage);
  const resImage: Image = responseUpload[0];

  const newUserDetail = {
    user: responseData.user.id,
    firstname: validatedFields.data.firstname,
    lastname: validatedFields.data.lastname,
    category: validatedFields.data.category,
    profession: validatedFields.data.profession,
    gender: validatedFields.data.gender,
    profileImage: resImage.id,
    description: validatedFields.data.description,
  };

  const responseDataDetail = await createUserService(newUserDetail);

  if (!responseDataDetail) {
    return {
      ...prevState,
      strapiErrors: null,
      zodErrors: null,
      message: "¡Ops! Algo ha ido mal. Por favor, inténtelo de nuevo.",
    };
  }

  if (responseDataDetail.error) {
    return {
      ...prevState,
      strapiErrors: responseData.error,
      zodErrors: null,
      message: "Fallo al crear el perfil.",
    };
  }

  const profileImageName = `${resImage.hash}${resImage.ext}`;

  const newUserCourse = {
    firstname: validatedFields.data.firstname,
    lastname: validatedFields.data.lastname,
    email: validatedFields.data.email,
    password: validatedFields.data.password,
    profileImage: profileImageName,
    documentId: responseDataDetail.data.documentId,
  };

  const { payload }: PayloadCourse = await registerUser(newUserCourse);

  const cookieStore = await cookies();
  cookieStore.set("jwt", responseData.jwt, config);

  if (responseData.adminJwt) {
    cookieStore.set("jwtToken", responseData.adminJwt, config);
  }

  if (payload) {
    cookieStore.set("courseToken", payload.authSession.tokens.accessToken, config);

    const sessionObject = {
      session: {
        value: {
          isLoggedIn: true,
          identity: payload.authSession.identity,
          associatedIdentity: payload.authSession.associatedIdentity,
          tokens: payload.authSession.tokens,
        },
        isLoading: false,
      },
    };

    cookieStore.set("persistedState", JSON.stringify(sessionObject), config);
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

  const { payload }: PayloadCourse = await loginUser(validatedFields.data);

  const cookieStore = await cookies();
  cookieStore.set("jwt", responseData.jwt, config);

  if (responseData.adminJwt) {
    cookieStore.set("jwtToken", responseData.adminJwt, config);
  }

  if (payload) {
    cookieStore.set("courseToken", payload.authSession.tokens.accessToken, config);

    const sessionObject = {
      session: {
        value: {
          isLoggedIn: true,
          identity: payload.authSession.identity,
          associatedIdentity: payload.authSession.associatedIdentity,
          tokens: payload.authSession.tokens,
        },
        isLoading: false,
      },
    };

    cookieStore.set("persistedState", JSON.stringify(sessionObject), config);
  }

  redirect("/");
}

export async function logoutAction() {
  const cookieStore = await cookies();

  cookieStore.set("jwt", "", { ...config, maxAge: 0 });
  cookieStore.set("jwtToken", "", { ...config, maxAge: 0 });
  cookieStore.set("courseToken", "", { ...config, maxAge: 0 });
  cookieStore.set("persistedState", "", { ...config, maxAge: 0 });
}
