import { redirect } from "next/navigation";
import { Box } from "@mui/material";
import { ButtonsMenu } from "./ButtonsMenu";
import { ProfileMenu } from "./ProfileMenu";
import { getUserByIdUser, getUserMeLoader } from "@/data";

export const AuthMenu = async () => {
  const user = await getUserMeLoader();

  if (!user.ok) {
    return (
      <Box sx={{ flexGrow: 0, display: "flex" }}>
        <ButtonsMenu />
      </Box>
    );
  }

  const { data } = await getUserByIdUser(user.data["documentId"]);
  const userDetail = data[0];

  if (userDetail == null) {
    redirect("/auth/bienvenido")
  }

  return (
    <Box sx={{ flexGrow: 0, display: "flex" }}>
      <ProfileMenu user={userDetail} />
    </Box>
  );
};
