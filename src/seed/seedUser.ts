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

export const initialData: SeedData = {
    users: [
        {
            username: 'crdavip',
            fullname: 'Cristian David',
            profession: ['Diseñador Grafico', 'Programador'],
            rating: 5.0,
            description: 'Creativa en diseño gráfico, apasionado del desarrollo web y la optimización de código.',
            profile_image: 'avatar.jpg',
            profile_views: 12000,
            total_contents: 80,
            socials: ['LinkedIn', 'YouTube'],
            gender: "Hombre",
        },
        {
            username: "devMaster99",
            fullname: "Carlos Rodríguez",
            profession: ["Programador"],
            rating: 4.8,
            description: "Apasionado del desarrollo web y la optimización de código.",
            profile_image: "avatar.jpg",
            profile_views: 1200,
            total_contents: 35,
            socials: ["LinkedIn", "YouTube"],
            gender: "Hombre"
        },
        {
            username: "designQueen",
            fullname: "Andrea López",
            profession: ["Diseñador Grafico"],
            rating: 4.7,
            description: "Creativa en diseño gráfico y branding para marcas digitales.",
            profile_image: "avatar.jpg",
            profile_views: 950,
            total_contents: 28,
            socials: ["Instagram", "Facebook"],
            gender: "Mujer"
        },
        {
            username: "fitLife2024",
            fullname: "Ricardo Fernández",
            profession: ["Fitness", "Cantante"],
            rating: 4.9,
            description: "Entrenador personal y cantante apasionado por la música y la vida saludable.",
            profile_image: "avatar.jpg",
            profile_views: 1800,
            total_contents: 50,
            socials: ["Instagram", "YouTube"],
            gender: "Hombre"
        }
    ]
}