import { UserDetail } from "./userdetail.interface";

export interface User {
  documentId: string;
  username: string;
  email: string;
  userDetail: UserDetail;
}
