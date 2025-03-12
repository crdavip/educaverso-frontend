import { ProfessionalCategories } from "@/interfaces/category.interface";

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
            rating: 1.4,
            description: 'Creativo en diseño gráfico, apasionado del desarrollo web y la optimización de código.',
            profileImage: 'crdavip.jpg',
            profileViews: 12335,
            totalContents: 80,
            socials: ['LinkedIn', 'YouTube', 'Facebook'],
            gender: "Hombre",
            category: ["Programación", "Diseño"]
        },
        {
            username: "devMaster99",
            fullname: "Carlos Rodríguez",
            profession: ["Programador"],
            rating: 3.8,
            description: "Apasionado del desarrollo web y la optimización de código.",
            profileImage: "devMaster99.jpg",
            profileViews: 3250,
            totalContents: 35,
            socials: ["LinkedIn", "YouTube"],
            gender: "Hombre",
            category: ["Programación"],
        },
        {
            username: "designQueen",
            fullname: "Andrea López",
            profession: ["Diseñador Grafico"],
            rating: 4.5,
            description: "Creativa en diseño gráfico y branding para marcas digitales.",
            profileImage: "designQueen.jpg",
            profileViews: 950,
            totalContents: 28,
            socials: ["Instagram", "Facebook"],
            gender: "Mujer",
            category: ["Diseño"],
        },
        {
            username: "fitLife2024",
            fullname: "Ricardo Fernández",
            profession: ["Fitness", "Cantante"],
            rating: 3.3,
            description: "Entrenador personal y cantante apasionado por la música y la vida saludable.",
            profileImage: "fitLife2024.jpg",
            profileViews: 1800,
            totalContents: 50,
            socials: ["Instagram", "YouTube"],
            gender: "Hombre",
            category: ["Fitness"],
        },
        
    ]
}