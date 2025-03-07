export interface User {
    //id: string;
    username: string;
    fullname: string;
    profession: ValidProfessions[];
    rating: number;
    description: string;
    profile_image?: string;
    profile_views: number;
    total_contents: number;
    socials: ValidSocials[];
    gender: ValidGenders;
}

export type ValidGenders = 'Hombre'|'Mujer'|'Otro';
export type ValidSocials = 'Facebook'|'Instagram'|'LinkedIn'|'YouTube';
export type ValidProfessions = 'Diseñador Grafico'|'Programador'|'Cantante'|'Fitness';