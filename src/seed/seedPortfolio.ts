interface SeedPortfolio {
  title: string;
  description?: string;
  images: string[];
  created_at: Date;
}

interface SeedData {
  portfolios: SeedPortfolio[];
}

export const initialDataPortfolio: SeedData = {
  portfolios: [
    {
      title: "Desarrollo de Aplicación Web",
      description: "Creación de una plataforma en línea para gestión de tareas con React y Node.js.",
      images: ["portfolio-1.jpg", "portfolio-2.jpg", "portfolio-3.jpg", "portfolio-4.jpg"],
      created_at: new Date("2024-11-01"),
    },
    {
      title: "Recetas Saludables",
      description: "Colección de recetas nutritivas y deliciosas con ingredientes naturales.",
      images: ["portfolio-2.jpg", "portfolio-3.jpg", "portfolio-4.jpg"],
      created_at: new Date("2024-12-24"),
    },
    {
      title: "Curso de Maquillaje Profesional",
      description: "Técnicas avanzadas de maquillaje para eventos y sesiones fotográficas.",
      images: ["portfolio-3.jpg", "portfolio-4.jpg"],
      created_at: new Date("2025-01-13"),
    },
    {
      title: "Rutina de Entrenamiento en Casa",
      description: "Programa de ejercicios efectivos sin necesidad de equipo de gimnasio.",
      images: ["portfolio-4.jpg"],
      created_at: new Date("2025-03-13"),
    },
  ],
};
