import styles from "./errors.module.scss";

interface StrapiErrorsProps {
  message: string | null;
  name: string;
  status: string | null;
}

export function StrapiErrors({ error }: { readonly error: StrapiErrorsProps }) {
  if (!error?.message) return null;
  if (error?.message === "Email or Username are already taken") {
    error.message = "El Correo o el Usuario ya existen";
  }
  if (error?.message === "Invalid identifier or password") {
    error.message = "Identificador o Contraseña inválidos";
  }
  return <div className={styles.error}>{error.message}</div>;
}
