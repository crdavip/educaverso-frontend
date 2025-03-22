import { Image } from "./image.interface";
import { BlocksContent } from "@strapi/blocks-react-renderer";
import { UserDetail } from "./userdetail.interface";

export interface Blog {
  documentId: string;
  title: string;
  duration: number;
  description: string;
  content: BlocksContent;
  createdAt: Date;
  image: Image;
  userDetail: UserDetail;
  slug: string;
}
