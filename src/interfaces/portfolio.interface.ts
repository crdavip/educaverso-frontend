import { Image } from "./image.interface";

export interface Portfolio {
    documentId: string;
    title: string;
    description?: string;
    createdAt: Date;
    images: Image[];
    slug: string;
}