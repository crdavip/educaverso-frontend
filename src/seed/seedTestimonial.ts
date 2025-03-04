interface SeedTestimonial {
    rating: number;
    description: string;
    name_client: string;
    profession_client: ValidProfessions[];
    image_client: string;
}

type ValidProfessions = 'Diseñador Grafico'|'Programador'|'Cantante'|'Fitness';

interface SeedData {
    testimonials: SeedTestimonial[],
}

export const initialData: SeedData = {
    testimonials: [
        {
            rating: 5.0,
            description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec.",
            name_client: "Cliente 1",
            profession_client: ["Diseñador Grafico"],
            image_client: "avatar.jpg",
        },
        {
            rating: 5.0,
            description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec.",
            name_client: "Cliente 2",
            profession_client: ["Programador"],
            image_client: "avatar.jpg",
        }
    ]
}