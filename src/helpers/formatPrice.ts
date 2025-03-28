export const formatPrice = (price?: number) => {
  const priceCurrencyFormatted = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price ?? 0);
  return `COP ${priceCurrencyFormatted}`;
};
