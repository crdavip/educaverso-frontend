interface SeedTestimonial {
    rating?: number;
    description: string;
    name_client: string;
    profession_client: ValidProfessions[];
    image_client: string;
}

type ValidProfessions = 'Diseñador Grafico'|'Programador'|'Cantante'|'Fitness';

interface SeedData {
    testimonials: SeedTestimonial[],
}

export const initialDataTestimonial: SeedData = {
    testimonials: [
        {
            rating: 5.0,
            description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec.",
            name_client: "Lizeth Valencia",
            profession_client: ["Fitness"],
            image_client: "avatar-default.jpg",
        },
        {
            rating: 4.5,
            description: "Yorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec.",
            name_client: "Martin Sierra",
            profession_client: ["Programador"],
            image_client: "avatar-default.jpg",
        }
    ]
}