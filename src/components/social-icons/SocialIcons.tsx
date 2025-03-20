import Link from "next/link";
import { Box, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import { SocialMedia } from "@/interfaces";
import styles from "./socialicons.module.scss";

const socialIcons = {
  Facebook: <Facebook />,
  Instagram: <Instagram />,
  LinkedIn: <LinkedIn />,
  YouTube: <YouTube />,
};

interface Props {
  socials: SocialMedia[];
}

export const SocialIcons = ({ socials }: Props) => {
  return (
    <Box className={styles.wrapper}>
      {socials.map((social) => (
        <Link key={social.documentId} href={social.url} target="_blank">
          <IconButton aria-label={social.name} size="small" className={styles.button}>
            {socialIcons[social.name]}
          </IconButton>
        </Link>
      ))}
    </Box>
  );
};
