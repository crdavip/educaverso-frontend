import { Grid2 as Grid } from "@mui/material";
import { Certificate } from "@/interfaces";
import styles from "./certification.module.scss";
import { CertificationCard } from "./CertificationCard";

interface Props {
    certificates: Certificate[];
}

export const CertificationGrid = ({certificates}: Props) => {
  return (
    <Grid container spacing={3} className={styles.courses}>
      {certificates.map((certificate) => (
        <Grid key={certificate.documentId} size={{ xs: 6, sm: 4 }}>
            <CertificationCard certificate={certificate} />
        </Grid>
      ))}
    </Grid>
  );
};
