export interface Certification {
  title: string;
  year: number;
  type: ValidType;
}

type ValidType = "Certificado" | "Premio";
