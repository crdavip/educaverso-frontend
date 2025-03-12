interface SeedCategory {
    name: string;
    slug: string;
}

interface SeedData {
    categories: SeedCategory[],
}

export const initialDataCategory: SeedData = {
    categories: [
        {
            name: 'Programación',
            slug: 'programacion',
        },
        {
            name: 'Diseño',
            slug: 'diseno',
        },
        {
            name: 'Alimentación',
            slug: 'alimentacion',
        },
        {
            name: 'Fitness',
            slug: 'fitness',
        },
    ]
}