import { Blog, Certificate, Image, Portfolio, ProfessionalCategories, SocialMedia, User, Review } from "./";

export interface UserDetail {
  id: number;
  documentId: string;
  firstname: string;
  lastname: string;
  profession: string;
  description: string;
  gender: ValidGenders;
  profileImage?: Image;
  reviews: Review[];
  user: User;
  profileViews: number;
  socials: SocialMedia[];
  portfolios: Portfolio[];
  certificates: Certificate[];
  category: ProfessionalCategories;
  blogs: Blog[];
}

export type ValidGenders = "Hombre" | "Mujer" | "Otro";
