export const timeAgo = (date: Date): string => {
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const intervals: { label: string; singular: string; plural: string; seconds: number }[] = [
    { label: "año", singular: "año", plural: "años", seconds: 31536000 },
    { label: "mes", singular: "mes", plural: "meses", seconds: 2592000 },
    { label: "sem", singular: "sem", plural: "sem", seconds: 604800 },
    { label: "día", singular: "día", plural: "días", seconds: 86400 },
    { label: "hora", singular: "hora", plural: "horas", seconds: 3600 },
    { label: "min", singular: "min", plural: "min", seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `hace ${count} ${count === 1 ? interval.singular : interval.plural}`;
    }
  }

  return "reciente";
};
