interface SeedCourse {
    title: string;
    image: string;
    students: number;
    duration: number;
    level: ValidLevel;
    rating: number;
    price: number;
    url: string;
}

type ValidLevel = 'Principiante'|'Intermedio'|'Avanzado';

interface SeedData {
    courses: SeedCourse[],
}

export const initialDataCourse: SeedData = {
    courses: [
        {
            title: "Trilogia Creativa",
            image: "course-1.jpg",
            students: 118,
            duration: 12,
            level: "Principiante",
            rating: 5.0,
            price: 0,
            url: "https://educacion.beunik.co/courses/details/18"
        },
        {
            title: "Freestyle con Barbero Monster",
            image: "course-2.jpg",
            students: 118,
            duration: 34,
            level: "Intermedio",
            rating: 5.0,
            price: 25000,
            url: "https://educacion.beunik.co/courses/details/23"
        },
        {
            title: "Evolución de negocio a empresa",
            image: "course-3.jpg",
            students: 118,
            duration: 62,
            level: "Avanzado",
            rating: 5.0,
            price: 100000,
            url: "https://educacion.beunik.co/courses/details/51"
        },
    ]
}