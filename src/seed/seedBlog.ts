interface SeedBlog {
    title: string;
    created_at: Date;
    duration: number;
    description: string;
    tags?: string[];
}

interface SeedData {
    blogs: SeedBlog[],
}

export const initialData: SeedData = {
    blogs: [
        {
            title: "Titulo Blog 1",
            created_at: new Date("2024-17-10"),
            duration: 5,
            description: "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictumest a",
            tags: ["Etiqueta 1", "Etiqueta 2", "Etiqueta 3"]
        },
        {
            title: "Titulo Blog 2",
            created_at: new Date("2024-17-10"),
            duration: 5,
            description: "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictumest a",
            tags: ["Etiqueta 1", "Etiqueta 2", "Etiqueta 3"]
        },
        {
            title: "Titulo Blog 3",
            created_at: new Date("2024-17-10"),
            duration: 5,
            description: "Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictumest a",
            tags: ["Etiqueta 1", "Etiqueta 2", "Etiqueta 3"]
        },
    ]
}