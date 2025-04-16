import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, Typography, Box, IconButton, Chip } from "@mui/material";
import { InsertPhotoOutlined, ZoomOutMap } from "@mui/icons-material";
import { Portfolio } from "@/interfaces";
import { timeAgo } from "@/helpers";
import styles from "./portfolio.module.scss";

interface Props {
  portfolio: Portfolio;
}

export const PortfolioCard = ({ portfolio }: Props) => {
  return (
    <>
      <Card className={styles.portfolioCard}>
        <CardContent className={styles.portfolioCardBody}>
          <Image
            src={portfolio.images[0].url}
            alt={portfolio.title}
            width={300}
            height={300}
          />
          <Box className={styles.portfolioCardBodyBg}>
            <Box className={styles.portfolioQuantity}>
              <InsertPhotoOutlined color="primary" fontSize="small" />
              <Typography variant="caption">{portfolio.images.length}</Typography>
            </Box>
            <Link href={`/portafolio/${portfolio.slug}`}>
              <Typography variant="h6" fontWeight={700}>
                {portfolio.title}
              </Typography>
            </Link>

            <Chip variant="filled" color="primary" size="small" label={timeAgo(new Date(portfolio.createdAt))} />
          </Box>
          <Link href={`/portafolio/${portfolio.slug}`}>
            <IconButton className={styles.zoomButton} aria-label="Zoom image">
              <ZoomOutMap color="primary" fontSize="large" />
            </IconButton>
          </Link>
        </CardContent>
      </Card>
    </>
  );
};
