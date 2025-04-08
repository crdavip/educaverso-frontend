import { UserDetail } from "./userdetail.interface";

export interface ProfessionalCategories {
    id: number;
    documentId: string;
    name: string;
    slug: string;
    userDetail: UserDetail[];
}