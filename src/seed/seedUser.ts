import { ProfessionalCategories } from "@/interfaces";

interface SeedUser {
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

type ValidGenders = 'Hombre'|'Mujer'|'Otro';
type ValidSocials = 'Facebook'|'Instagram'|'LinkedIn'|'YouTube';
type ValidProfessions = 'Diseñador Grafico'|'Programador'|'Cantante'|'Fitness';

interface SeedData {
    users: SeedUser[],
}

export const initialDataUser: SeedData = {
    users: [
        {
            username: 'crdavip',
            fullname: 'Cristian David',
            profession: ['Programador', 'Diseñador Grafico'],
            rating: 2.5,
            description: 'Creativo en diseño gráfico, apasionado del desarrollo web y la optimización de código.',
            profileImage: 'crdavip.jpg',
            profileViews: 12335,
            totalContents: 80,
            socials: ['LinkedIn', 'YouTube', 'Facebook'],
            gender: "Hombre",
            category: ["Coaching"]
        },
        {
            username: "ecoChef",
            fullname: "Carlos Rodríguez",
            profession: ["Fitness"],
            rating: 3.5,
            description: "Chef especializado en cocina saludable y sostenible.",
            profileImage: "ecoChef.jpg",
            profileViews: 3250,
            totalContents: 35,
            socials: ["LinkedIn", "YouTube"],
            gender: "Hombre",
            category: ["Alimentación"],
        },
        {
            username: "glamQueen",
            fullname: "Andrea López",
            profession: ["Diseñador Grafico"],
            rating: 4.5,
            description: "Especialista en maquillaje digital y branding.",
            profileImage: "glamQueen.jpg",
            profileViews: 950,
            totalContents: 28,
            socials: ["Instagram", "Facebook"],
            gender: "Mujer",
            category: ["Belleza"],
        },
        {
            username: "fitLife2024",
            fullname: "Ricardo Fernández",
            profession: ["Fitness", "Cantante"],
            rating: 4.0,
            description: "Entrenador personal y cantante apasionado por la música y la vida saludable.",
            profileImage: "fitLife2024.jpg",
            profileViews: 1800,
            totalContents: 50,
            socials: ["Instagram", "YouTube"],
            gender: "Hombre",
            category: ["Entrenamiento"],
        },  
    ]
}