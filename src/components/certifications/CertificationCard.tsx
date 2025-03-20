import { Card, CardContent, Chip, Typography } from "@mui/material";
import { Certificate } from "@/interfaces";
import styles from "./certification.module.scss";
import Image from "next/image";

interface Props {
  certificate: Certificate;
}

const iconType = {
  Certificado: "certificate.svg",
  Premio: "award.svg",
};

export const CertificationCard = ({ certificate }: Props) => {
  return (
    <Card className={styles.certificateCard}>
      <CardContent className={styles.certificateCardContent}>
        <Image src={`/${iconType[certificate.type]}`} alt={certificate.title} width={100} height={100} />
        <Typography variant="body1">{certificate.title}</Typography>
        <Chip color="primary" size="small" label={`${certificate.year}`} />
      </CardContent>
    </Card>
  );
};
