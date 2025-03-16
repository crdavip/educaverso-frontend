export interface Course {
    title: string;
    image: string;
    students: number;
    duration: number;
    level: ValidLevel;
    rating: number;
    price: number;
    url: string;
}

export type ValidLevel = 'Principiante'|'Intermedio'|'Avanzado';