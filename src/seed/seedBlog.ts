interface SeedBlog {
  image: string;
  title: string;
  created_at: Date;
  duration: number;
  description: string;
}

interface SeedData {
  blogs: SeedBlog[];
}

export const initialDataBlog: SeedData = {
  blogs: [
    {
      image: "blog-1.jpg",
      title: "Introducción a TypeScript: Ventajas y Aplicaciones",
      created_at: new Date("2024-11-01"),
      duration: 8,
      description:
        "Descubre las principales ventajas de TypeScript sobre JavaScript, su tipado estático y cómo puede mejorar el desarrollo de aplicaciones escalables.",
    },
    {
      image: "blog-2.jpg",
      title: "Optimización de Consultas en MySQL",
      created_at: new Date("2025-01-15"),
      duration: 10,
      description:
        "Aprende técnicas esenciales para mejorar el rendimiento de tus consultas en MySQL, desde el uso de índices hasta la optimización de subconsultas.",
    },
    {
      image: "blog-3.jpg",
      title: "Mejores Prácticas con GitHub en Equipos Pequeños",
      created_at: new Date("2025-03-12"),
      duration: 7,
      description:
        "Explora flujos de trabajo eficientes para colaborar en GitHub con un equipo pequeño, desde ramas y pull requests hasta la integración con herramientas ágiles.",
    },
  ],
};
