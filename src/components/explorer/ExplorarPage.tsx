"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  SearchOutlined,
  WindowOutlined,
  GroupOutlined,
  CollectionsOutlined,
  NewspaperOutlined,
} from "@mui/icons-material";
import {
  Container,
  FormControl,
  TextField,
  InputAdornment,
  Grid2 as Grid,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  ToggleButtonGroup,
  ToggleButton,
  Pagination,
  CircularProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useExplorer } from "@/hooks";
import { ProfessionalCategories } from "@/interfaces";
import { TitlePg } from "../title-pg/TitlePg";
import { EmptyContent } from "../user/user-content/EmptyContent";
import { ExplorerCard } from "./ExplorerCard";
import styles from "./explorer.module.scss";

interface Props {
  categories: ProfessionalCategories[];
}

export default function ExplorarPage({ categories }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const {
    type,
    sortBy,
    search,
    selectedCategories,
    page,
    loading,
    apiData,
    handleSearchChange,
    handleChangeType,
    handleChangeOrder,
    handleCategoryToggle,
    handlePageChange,
  } = useExplorer({ searchParams, pathname, router });

  return (
    <>
      <TitlePg title="Explorar" subtitle="Descubre nuestra comunidad" />
      <Container className={styles.pageContainer}>
        {/* Buscador */}
        <FormControl fullWidth>
          <TextField
            name="search"
            type="text"
            value={search}
            onChange={handleSearchChange}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlined />
                  </InputAdornment>
                ),
              },
            }}
            variant="outlined"
            margin="dense"
            placeholder="Busca cualquier cosa..."
            autoComplete="off"
          />
        </FormControl>

        <Grid container columnSpacing={5} className={styles.mainContainer} sx={{}}>
          {/* Sidebar Filtros */}
          <Grid className={styles.filterContainer} size={{ xs: 12, md: 3 }} container>
            <Typography variant="body1" fontWeight={700} mb={1}>
              Categorías
            </Typography>
            <FormGroup>
              {categories.map((category) => (
                <FormControlLabel
                  key={category.slug}
                  control={
                    <Checkbox
                      checked={selectedCategories.includes(category.slug)}
                      onChange={() => handleCategoryToggle(category.slug)}
                    />
                  }
                  label={category.name}
                />
              ))}
            </FormGroup>

            <Box mt={3} sx={{ width: "100%" }}>
              <Typography variant="body1" fontWeight={700} mb={1}>
                Ordenar por
              </Typography>
              <ToggleButtonGroup
                size="small"
                orientation="vertical"
                color="secondary"
                value={sortBy}
                exclusive
                onChange={handleChangeOrder}
                aria-label="Ordenar por"
                fullWidth
              >
                <ToggleButton value="DESC">Recientes</ToggleButton>
                <ToggleButton value="ASC">Clásicos</ToggleButton>
              </ToggleButtonGroup>
            </Box>
          </Grid>

          {/* Contenidos */}
          <Grid size={{ xs: 12, md: 9 }} className={styles.contentGrid}>
            {/* Tipos */}
            <ToggleButtonGroup
              orientation={isMobile ? "vertical" : "horizontal"}
              color="secondary"
              value={type}
              exclusive
              onChange={handleChangeType}
              aria-label="Tipos de Contenido"
              fullWidth
              sx={{ marginBottom: 4 }}
            >
              <ToggleButton value="all" sx={{ gap: 1 }}>
                <WindowOutlined /> Todos
              </ToggleButton>
              <ToggleButton value="user-details" sx={{ gap: 1 }}>
                <GroupOutlined /> Profesionales
              </ToggleButton>
              <ToggleButton value="portfolios" sx={{ gap: 1 }}>
                <CollectionsOutlined /> Portafolios
              </ToggleButton>
              <ToggleButton value="blogs" sx={{ gap: 1 }}>
                <NewspaperOutlined /> Blogs
              </ToggleButton>
            </ToggleButtonGroup>

            {/* Grid Cards */}
            <Grid container spacing={3}>
              {loading ? (
                <Box className={styles.loaderContainer}>
                  <CircularProgress color="primary" />
                </Box>
              ) : apiData.data.length === 0 ? (
                <EmptyContent />
              ) : (
                <>
                  {apiData.data.map((item) => (
                    <Grid key={item.documentId} size={{ xs: 12, sm: 6, md: 4 }}>
                      <ExplorerCard item={item} />
                    </Grid>
                  ))}
                </>
              )}
            </Grid>
            {/* Paginación */}
            {apiData.total > 9 && (
              <Box display="flex" justifyContent="center" mt={5}>
                <Pagination
                  count={Math.ceil(apiData.total / 9)}
                  page={page}
                  onChange={handlePageChange}
                  color="secondary"
                  variant="outlined"
                  shape="rounded"
                />
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
