import { z } from "zod";

export const schemaRegister = z
  .object({
    username: z
      .string()
      .min(3, { message: "Mínimo 4 caracteres" })
      .max(30, { message: "Máximo 30 caracteres" }),
    password: z
      .string()
      .min(8, { message: "Mínimo 8 caracteres " })
      .max(100, { message: "Máximo 100 caracteres " })
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, {
        message: "Debe contener mayúsculas, minúsculas y números",
      }),
    repeatPassword: z.string(),
    email: z.string().email({
      message: "Correo electrónico no válido",
    }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Las contraseñas no coinciden",
    path: ["repeatPassword"],
  });
