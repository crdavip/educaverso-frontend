export const formatTime = (totalSeconds: number) => {
  const totalMinutes = Math.floor(totalSeconds / 60);

  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (minutes === 0) {
    return `${hours}hr`;
  } else if (hours === 0) {
    return `${minutes}min`;
  } else {
    return `${hours}hr y ${minutes}min`;
  }
};
