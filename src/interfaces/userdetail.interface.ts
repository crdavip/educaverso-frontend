import { Blog, Image } from "./";
import { ProfessionalCategories } from "./category.interface";
import { Certificate } from "./certificate.interface";
import { Portfolio } from "./portfolio.interface";
import { Review } from "./review.interface";
import { SocialMedia } from "./social.interface";
import { User } from "./user.interface";

export interface UserDetail {
    documentId: string;
    username: string;
    profession: string;
    description: string;
    gender: ValidGenders;
    profileImage?: Image;
    reviews: Review[];
    user: User;
    // profileViews: number;
    // totalContents: number;
    socials: SocialMedia[];
    portfolios: Portfolio[];
    certificates: Certificate[];
    category: ProfessionalCategories;
    blogs: Blog[];
}

export type ValidGenders = 'Hombre'|'Mujer'|'Otro';
