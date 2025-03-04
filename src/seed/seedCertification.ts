interface SeedUser {
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

type ValidGenders = 'Hombre'|'Mujer'|'Otro';
type ValidSocials = 'Facebook'|'Instagram'|'LinkedIn'|'YouTube';
type ValidProfessions = 'Diseñador Grafico'|'Programador'|'Cantante'|'Fitness';

interface SeedData {
    users: SeedUser[],
}

interface SeedPortfolio {
    image: string[];
    title: string;
    description?: string;
}

interface SeedTestimonial {
    rating: number;
    description: string;
    name_client: string;
    profession_client: ValidProfessions[];
    image_client: string;
}

interface SeedCourse {
    title: string;
    image: string;
    duration: number;
    students: number;
    rating: number;
    price: number;
}

interface SeedCertifications {
    image?: string;
    title: string;
    year: number;
}

interface SeedBlog {
    title: string;
    created_at: Date;
    duration: number;
    description: string;
    tags?: string[];
}

export const initialData: SeedData = {
    users: [
        {
            username: 'crdavip',
            fullname: 'Cristian Paniagua',
            profession: ['Diseñador Grafico', 'Programador'],
            rating: 5.0,
            description: 'Morem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Seddignissim, metus nec fringilla accumsan, risus.',
            profile_image: 'avatar.jpg',
            profile_views: 120,
            total_contents: 23,
            socials: ['LinkedIn', 'YouTube'],
            gender: "Hombre",
            portfolios: [
                {
                    image: ["image-not-found.jpg"],
                    title: "Mi portafolio 1",
                    description: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    image: ["image-not-found.jpg"],
                    title: "Mi portafolio 2",
                    description: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
                {
                    image: ["image-not-found.jpg"],
                    title: "Mi portafolio 3",
                    description: "Vorem ipsum dolor sit amet, consectetur adipiscing elit.",
                },
            ],
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
            ],
            courses: [
                {
                    title: "Titulo Curso 1",
                    image: "image-not-found.jpg",
                    duration: 12,
                    students: 118,
                    rating: 5.0,
                    price: 0,
                },
                {
                    title: "Titulo Curso 2",
                    image: "image-not-found.jpg",
                    duration: 12,
                    students: 118,
                    rating: 5.0,
                    price: 25000,
                },
                {
                    title: "Titulo Curso 3",
                    image: "image-not-found.jpg",
                    duration: 12,
                    students: 118,
                    rating: 5.0,
                    price: 100000,
                },
            ],
            certifications: [
                {
                    title: "Titulo Certificado 1",
                    year: 2024
                },
                {
                    title: "Premio 1",
                    year: 2023
                },
                {
                    title: "Titulo Certificado 2",
                    year: 2025
                },
                {
                    title: "Premio 2",
                    year: 2025
                },
                {
                    title: "Titulo Certificado 3",
                    year: 2025
                },
                {
                    title: "Premio 3",
                    year: 2025
                },
            ],
            blogs: [
                {

                },
            ]
        },
    ]
}