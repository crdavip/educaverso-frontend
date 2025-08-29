import { Typography } from "@mui/material";
import { formatNumber } from "@/helpers";
import { getTotalContents } from "@/data";

interface Props {
  idUser: string;
  username?: string;
}

export const TotalContent = async ({ idUser, username }: Props) => {
  const totalContent = await getTotalContents(idUser, username);

  return (
    <>
      <Typography variant="h4">{formatNumber(totalContent)}</Typography>
      <Typography variant="caption">{totalContent === 1 ? "Contenido" : "Contenidos"}</Typography>
    </>
  );
};
