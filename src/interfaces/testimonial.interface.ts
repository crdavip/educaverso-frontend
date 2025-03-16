export interface Testimonial {
    rating?: number;
    description: string;
    name_client: string;
    profession_client: ValidProfessions[];
    image_client: string;
}

type ValidProfessions = 'Diseñador Grafico'|'Programador'|'Cantante'|'Fitness';