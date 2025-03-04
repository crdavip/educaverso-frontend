interface SeedCourse {
    title: string;
    image: string;
    duration: number;
    students: number;
    rating: number;
    price: number;
}

interface SeedData {
    courses: SeedCourse[],
}

export const initialData: SeedData = {
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
    ]
}