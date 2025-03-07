import { Box, IconButton } from "@mui/material";
import styles from "./socialicons.module.scss";
import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import { ValidSocials } from "@/interfaces";

const socialIcons = {
  Facebook: <Facebook />,
  Instagram: <Instagram />,
  LinkedIn: <LinkedIn />,
  YouTube: <YouTube />,
};

interface Props {
  socials: ValidSocials[];
}

export const SocialIcons = ({ socials }: Props) => {
  return (
    <Box className={styles.wrapper}>
      {socials.map((social) => (
        <IconButton key={social} aria-label={social} size="small">
          {socialIcons[social]}
        </IconButton>
      ))}
    </Box>
  );
};
