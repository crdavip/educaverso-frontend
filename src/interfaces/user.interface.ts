import { ProfessionalCategories } from "./category.interface";

export interface User {
    //id: string;
    username: string;
    fullname: string;
    profession: ValidProfessions[];
    rating: number;
    description: string;
    profileImage?: string;
    profileViews: number;
    totalContents: number;
    socials: ValidSocials[];
    gender: ValidGenders;
    category: ProfessionalCategories["name"][];
}

export type ValidGenders = 'Hombre'|'Mujer'|'Otro';
export type ValidSocials = 'Facebook'|'Instagram'|'LinkedIn'|'YouTube';
export type ValidProfessions = 'Diseñador Grafico'|'Programador'|'Cantante'|'Fitness';
