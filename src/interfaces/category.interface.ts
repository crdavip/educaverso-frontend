import { UserDetail } from "./userdetail.interface";

export interface ProfessionalCategories {
    name: string;
    slug: string;
    userDetail: UserDetail[];
}