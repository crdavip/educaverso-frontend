import { Box } from "@mui/material";
import { DriveFolderUploadOutlined, PersonOutlined, PowerSettingsNewOutlined } from "@mui/icons-material";
import { ButtonsMenu } from "./ButtonsMenu";
import { ProfileMenu } from "./ProfileMenu";

// import { useAuthStore } from "@/store";

const settings = [
  {
    title: "Perfil",
    icon: <PersonOutlined />,
  },
  {
    title: "Mi Contenido",
    icon: <DriveFolderUploadOutlined />,
  },
  {
    title: "Cerrar Sesión",
    icon: <PowerSettingsNewOutlined />,
  },
];

export const AuthMenu = () => {
//   const isAuth = useAuthStore(state => state.isAuth);

  const isAuth = true;
  return (
    <Box sx={{ flexGrow: 0, display: "flex" }}>{!isAuth ? <ButtonsMenu /> : <ProfileMenu settings={settings} />}</Box>
  );
};
