import { ProfessionalCategories } from "./category.interface";

export interface Profession {
  id: number;
  name: string;
  category: ProfessionalCategories;
}
