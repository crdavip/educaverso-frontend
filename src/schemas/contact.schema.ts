import { z } from "zod";

export const schemaContact = z.object({
  fullname: z.string().min(1, { message: "Nombre requerido" }).max(80, { message: "Máximo 80 caracteres" }),
  email: z.string().email({
    message: "Correo electrónico no válido",
  }),
  phone: z.number().min(10, "Ingrese un número valido"),
});
