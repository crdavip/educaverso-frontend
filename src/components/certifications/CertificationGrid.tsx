import { Grid2 as Grid } from "@mui/material";
import { Certification } from "@/interfaces";
import styles from "./certification.module.scss";
import { CertificationCard } from "./CertificationCard";

interface Props {
    certifications: Certification[];
}

export const CertificationGrid = ({certifications}: Props) => {
  return (
    <Grid container spacing={3} className={styles.courses}>
      {certifications.map((certificate) => (
        <Grid key={certificate.title} size={{ xs: 6, sm: 4 }}>
            <CertificationCard certificate={certificate} />
        </Grid>
      ))}
    </Grid>
  );
};
