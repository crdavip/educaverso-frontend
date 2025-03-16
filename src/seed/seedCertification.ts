interface SeedCertifications {
  title: string;
  year: number;
  type: ValidType;
}

type ValidType = 'Certificado'|'Premio';

interface SeedData {
  certifications: SeedCertifications[];
}

export const initialDataCertificate: SeedData = {
  certifications: [
    { title: "Certificado de Calidad Agrícola", year: 2024, type: "Certificado" },
    { title: "Premio a la Innovación en Cultivos", year: 2023, type: "Premio" },
    { title: "Certificado de Sostenibilidad Ecológica", year: 2022, type: "Certificado" },
    { title: "Premio a la Mejor Producción Orgánica", year: 2021, type: "Premio" },
    { title: "Certificado de Buenas Prácticas Agrícolas", year: 2020, type: "Certificado" },
    { title: "Premio al Desarrollo Tecnológico en Semillas", year: 2019, type: "Premio" }
  ],
};
