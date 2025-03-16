export const timeAgo = (date: Date): string => {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals: { label: string; singular: string; plural: string; seconds: number }[] = [
    { label: "año", singular: "año", plural: "años", seconds: 31536000 },
    { label: "mes", singular: "mes", plural: "meses", seconds: 2592000 },
    { label: "semana", singular: "semana", plural: "semanas", seconds: 604800 },
    { label: "día", singular: "día", plural: "días", seconds: 86400 },
    { label: "hora", singular: "hora", plural: "horas", seconds: 3600 },
    { label: "minuto", singular: "minuto", plural: "minutos", seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `hace ${count} ${count === 1 ? interval.singular : interval.plural}`;
    }
  }

  return "hace unos segundos";
};
