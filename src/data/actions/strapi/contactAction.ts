"use server";

import { schemaContact } from "@/schemas";
import { contactService } from "@/data/services/strapi/contactService";

export async function contactAction(prevState: any, formData: FormData) {
  const validatedFields = schemaContact.safeParse({
    fullname: formData.get("fullname"),
    email: formData.get("email"),
    phone: Number(formData.get("phone")),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Faltan campos. Error al contactar.",
    };
  }

  const responseData = await contactService(validatedFields.data);

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
      message: "Fallo al contactar.",
    };
  }

  return {
    message: "¡Contacto realizado!",
  }
}
