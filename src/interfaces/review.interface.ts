import { UserDetail } from "./userdetail.interface";

export interface Review {
    documentId: string;
    rating: number;
    description: string;
    reviewer: UserDetail;
    reviewed: UserDetail;
}