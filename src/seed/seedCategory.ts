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
            name: 'Belleza',
            slug: 'belleza',
        },
        {
            name: 'Coaching',
            slug: 'coaching',
        },
        {
            name: 'Entrenamiento',
            slug: 'entranamiento',
        },
        {
            name: 'Alimentación',
            slug: 'alimentacion',
        },
    ]
}