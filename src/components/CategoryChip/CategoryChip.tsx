import React from 'react';
import { Button, Chip } from '@mui/material';
import { useRouter } from 'next/navigation';
import styles from './category-chip.module.scss';

type Props = {
  name: string
  id: number
}

function CategoryChip({ name, id }: Props) {
  const router = useRouter();

  function goToCategory() {
    router.push(`/by-category/${id}`);
  }

  return (
    <Button className={styles.button} onClick={goToCategory}>
      <Chip
        className={styles.chip}
        label={name}
        color="primary"
      />
    </Button>
  );
}

export default CategoryChip;
