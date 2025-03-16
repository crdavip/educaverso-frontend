import { Box, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import { ValidSocials } from "@/interfaces";
import styles from "./socialicons.module.scss";

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
        <IconButton key={social} aria-label={social} size="small" className={styles.button}>
          {socialIcons[social]}
        </IconButton>
      ))}
    </Box>
  );
};
