import { z } from "zod";

export const authSchema = z.object({
  username: z.string().min(3, { message: "Mínimo 3 caracteres" }).max(30, { message: "Máximo 30 caracteres" }),
  password: z
    .string()
    .min(8, { message: "Mínimo 8 caracteres" })
    .max(100, { message: "Máximo 100 caracteres" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
      message: "Debe contener mayúsculas, minúsculas y números",
    }),
  repeatPassword: z.string(),
  email: z.string().email({ message: "Correo electrónico no válido" }),
});

export const authSchemaWithValidation = authSchema.refine((data) => data.password === data.repeatPassword, {
  message: "Las contraseñas no coinciden",
  path: ["repeatPassword"],
});

export const personalInfoSchema = z.object({
  firstname: z.string().min(3, "Mínimo 3 caracteres").trim(),
  lastname: z.string().min(3, "Mínimo 3 caracteres").trim(),
  gender: z.enum(["Hombre", "Mujer", "Otro"], {
    errorMap: () => ({ message: "Seleccione un género" }),
  }),
});

export const professionalInfoSchema = z.object({
  category: z.number().min(0, "Selecciona una categoría"),
  profession: z.string().min(1, "Selecciona una profesión"),
  profileImage: z
    .instanceof(File)
    .refine((file) => file.size === 0 || ["image/jpeg", "image/jpg", "image/png"].includes(file.type), {
      message: "La imagen debe ser en formato JPG, JPEG o PNG",
    })
    .optional(),
  description: z.string().max(150, "Máximo 150 caracteres").trim().optional(),
});

export const schemaRegisterSteps = [authSchemaWithValidation, personalInfoSchema, professionalInfoSchema];

export function getSchemaShape(schema: z.ZodTypeAny): z.ZodRawShape {
  if (schema instanceof z.ZodEffects) {
    return getSchemaShape(schema.innerType());
  }
  if (schema instanceof z.ZodObject) {
    return schema.shape;
  }
  return {};
}
