export const truncateText = (text: string, maxLength: number = 50) => {
  return text.length > maxLength ? text.substring(0, maxLength - 3) + "..." : text;
};
