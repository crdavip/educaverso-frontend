import { UserDetail } from "./userdetail.interface";

export interface SocialMedia {
  documentId: string;
  name: ValidSocials;
  url: string;
  userDetail: UserDetail;
}

export type ValidSocials = 'Facebook'|'Instagram'|'LinkedIn'|'YouTube';