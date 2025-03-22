import { Image } from "./image.interface";
import { UserDetail } from "./userdetail.interface";

export interface Portfolio {
    documentId: string;
    title: string;
    description?: string;
    createdAt: Date;
    userDetail: UserDetail;
    images: Image[];
    slug: string;
}