import { UserDetail } from "./userdetail.interface";

export interface Certificate {
  documentId: string;
  title: string;
  year: number;
  type: ValidType;
  userDetail: UserDetail;
}

type ValidType = "Certificado" | "Premio";
