"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useMediaQuery,
  useTheme,
  IconButton,
  Chip,
} from "@mui/material";
import { InsertPhotoOutlined, ZoomOutMap } from "@mui/icons-material";
import { Portfolio } from "@/interfaces";
import styles from "./portfolio.module.scss";
import { timeAgo } from "@/helpers";

interface Props {
  portfolio: Portfolio;
}

export const PortfolioCard = ({ portfolio }: Props) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Card className={styles.portfolioCard}>
        <CardContent className={styles.portfolioCardBody}>
          <Image src={`/portfolios/${portfolio.images[0]}`} alt={portfolio.title} width={300} height={300} />
          <Box className={styles.portfolioCardBodyBg}>
            <Box className={styles.portfolioQuantity}>
              <InsertPhotoOutlined color="primary" fontSize="small" />
              <Typography variant="caption">{portfolio.images.length}</Typography>
            </Box>
            <Typography variant="h6" fontWeight={700} onClick={handleClickOpen}>
              {portfolio.title}
            </Typography>

            <Chip variant="filled" color="primary" size="small" label={timeAgo(portfolio.created_at)} />
          </Box>
          <IconButton onClick={handleClickOpen} className={styles.zoomButton} aria-label="Zoom image">
            <ZoomOutMap color="primary" fontSize="large" />
          </IconButton>
        </CardContent>
      </Card>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        disableScrollLock
        aria-labelledby="Portfolio item in zoom"
        className={styles.portfolioModal}
      >
        <DialogTitle id="Portfolio item in zoom">{portfolio.title}</DialogTitle>
        <DialogContent className={styles.portfolioModalBody}>
          <DialogContentText>{portfolio.description}</DialogContentText>
          {portfolio.images?.map((image) => (
            <Image key={image} src={`/portfolios/${image}`} alt={image} width={600} height={600} />
          ))}
        </DialogContent>
        <DialogActions className={styles.portfolioActions}>
          <Button variant="contained" autoFocus onClick={handleClose}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
