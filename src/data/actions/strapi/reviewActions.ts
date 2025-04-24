"use server";

import { schemaReview } from "@/schemas";
import { getUserByIdUser, getUserMeLoader, reviewService } from "@/data";

export async function reviewAction(prevState: any, formData: FormData) {
  const reviewer = await getUserMeLoader();
  const { data } = await getUserByIdUser(reviewer.data.documentId);
  const reviewerId = data[0];

  const validatedFields = schemaReview.safeParse({
    rating: Number(formData.get("rating")),
    reviewed: formData.get("reviewed"),
    reviewer: reviewerId.documentId,
    description: formData.get("description"),
  });

  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Faltan campos. Error al crear reseña.",
    };
  }

  const responseData = await reviewService(validatedFields.data);

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
      message: "Fallo al crear reseña.",
    };
  }

  return {
    message: "Reseña Creada!",
  };
}
