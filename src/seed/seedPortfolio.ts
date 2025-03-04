interface SeedPortfolio {
    image: string[];
    title: string;
    description?: string;
}

interface SeedData {
    portfolios: SeedPortfolio[],
}

export const initialData: SeedData = {
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
    ]
}