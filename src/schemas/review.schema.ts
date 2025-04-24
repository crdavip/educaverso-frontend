import { z } from "zod";

export const schemaReview = z.object({
  description: z.string().min(1, { message: "Descripción requerida" }).max(150, { message: "Máximo 150 caracteres" }),
  rating: z.number().min(0, "Ingrese una calificación valida").max(5, "Ingrese una calificación valida"),
  reviewed: z.string().min(0, "El usuario no es valido"),
  reviewer: z.string().min(0, "El usuario no es valido"),
});
