import { z } from "zod";

export const schemaUser = z.object({
  user: z.number().min(1, "No hay usuario asociado"),
  firstname: z.string().min(3, "Mínimo 3 caracteres").trim(),
  lastname: z.string().min(3, "Mínimo 3 caracteres").trim(),
  category: z.number().min(0, "Selecciona una categoría"),
  profession: z.string().min(1, "Selecciona una profesión"),
  gender: z.enum(["Hombre", "Mujer", "Otro"], {
    errorMap: () => ({ message: "Seleccione un género" }),
  }),
  profileImage: z
    .instanceof(File)
    .refine((file) => file.size === 0 || ["image/jpeg", "image/jpg", "image/png"].includes(file.type), {
      message: "La imagen debe ser en formato JPG, JPEG o PNG",
    })
    .optional(),
  description: z.string().max(150, "Máximo 150 caracteres").trim().optional(),
  facebook: z.string().url("Ingresa un enlace válido de Facebook").trim().optional(),
  instagram: z.string().url("Ingresa un enlace válido de Instagram").trim().optional(),
  linkedin: z.string().url("Ingresa un enlace válido de LinkedIn").trim().optional(),
  youtube: z.string().url("Ingresa un enlace válido de YouTube").trim().optional(),
});
