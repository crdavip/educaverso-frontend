import { Typography } from "@mui/material";
import { formatNumber } from "@/helpers";
import { getTotalContents } from "@/data";

interface Props {
  idUser: string;
}

export const TotalContent = async ({ idUser }: Props) => {
  const totalContent = await getTotalContents(idUser);

  return (
    <>
      <Typography variant="h4">{formatNumber(totalContent)}</Typography>
      <Typography variant="caption">{totalContent === 1 ? "Contenido" : "Contenidos"}</Typography>
    </>
  );
};
