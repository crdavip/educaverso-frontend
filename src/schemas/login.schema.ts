import { z } from "zod";

export const schemaLogin = z.object({
  identifier: z.string().email({
    message: "Correo electrónico no válido",
  }),
  password: z.string().min(1, { message: "Contraseña requerida" }).max(100, { message: "Máximo 100 caracteres" }),
});
