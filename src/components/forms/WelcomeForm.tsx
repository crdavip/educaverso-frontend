"use client";

import { useActionState, useState } from "react";
import { AccountBox, InsertPhoto } from "@mui/icons-material";
import {
  FormControl,
  TextField,
  InputAdornment,
  Button,
  SelectChangeEvent,
  Select,
  InputLabel,
  MenuItem,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ProfessionalCategories } from "@/interfaces/category.interface";
import { createUserAction } from "@/data";
import { StrapiErrors } from "../custom/StrapiErrors";

const professions = [
  "Barbero",
  "Chef",
  "Coach",
  "Cosmetólogo",
  "Dermatólogo",
  "Dietista",
  "Entrenador",
  "Esteticista",
  "Estudiante",
  "Fisioterapeuta",
  "Instructor",
  "Manicurista",
  "Maquillador",
  "Mentor",
  "Nutricionista",
  "Peluquero",
  "Preparador Físico",
  "Profesor",
  "Psicólogo",
  "Tecnólogo en Alimentos",
  "Terapeuta",
];

interface Props {
  categories: ProfessionalCategories[];
  userId: number;
}

const INITIAL_STATE = {
  data: null,
};

export const WelcomeForm = ({ categories, userId }: Props) => {
  const [category, setCategory] = useState("");
  const [profession, setProfession] = useState("");

  const [formState, formAction] = useActionState(createUserAction, INITIAL_STATE);

  const handleChangeCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const handleChangeProfession = (event: SelectChangeEvent) => {
    setProfession(event.target.value as string);
  };

  return (
    <form action={formAction}>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <input type="hidden" name="user" value={userId} />
        <TextField
          name="firstname"
          type="text"
          label="Nombre"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBox />
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
          margin="dense"
          placeholder="John"
          error={formState?.zodErrors?.firstname}
          helperText={formState?.zodErrors?.firstname}
        />
        <TextField
          name="lastname"
          type="text"
          label="Apellido"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountBox />
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
          margin="dense"
          placeholder="Doe"
          error={formState?.zodErrors?.lastname}
          helperText={formState?.zodErrors?.lastname}
        />
        <FormControl margin="dense">
          <InputLabel id="select-category" error={formState?.zodErrors?.category}>
            {formState?.zodErrors?.category ?? "Categoría"}
          </InputLabel>
          <Select
            labelId="select-category"
            value={category}
            label="Categoría"
            name="category"
            onChange={handleChangeCategory}
            error={formState?.zodErrors?.category}
          >
            {categories.map((category) => (
              <MenuItem key={category.documentId} value={category.id - 1}>
                {category.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl margin="dense">
          <InputLabel id="select-profession" error={formState?.zodErrors?.profession}>
            {formState?.zodErrors?.profession ?? "Profesión"}
          </InputLabel>
          <Select
            labelId="select-profession"
            value={profession}
            label="Profesión"
            name="profession"
            onChange={handleChangeProfession}
            error={formState?.zodErrors?.profession}
          >
            {professions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl margin="dense">
          <FormLabel id="gender-group-label" error={formState?.zodErrors?.gender}>
            {formState?.zodErrors?.gender ?? "Género"}
          </FormLabel>
          <RadioGroup row aria-labelledby="gender-group-label" name="gender" defaultValue="">
            <FormControlLabel value="Hombre" control={<Radio size="small" />} label="Hombre" />
            <FormControlLabel value="Mujer" control={<Radio size="small" />} label="Mujer" />
            <FormControlLabel value="Otro" control={<Radio size="small" />} label="Otro" />
          </RadioGroup>
        </FormControl>
        <TextField
          name="profileImage"
          type="file"
          label="Foto de Perfil"
          inputProps={{
            accept: "image/jpeg, image/jpg, image/png",
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <InsertPhoto />
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
          margin="dense"
          error={formState?.zodErrors?.profileImage}
          helperText={formState?.zodErrors?.profileImage}
        />
        <TextField
          type="text"
          name="description"
          label="Descripción"
          placeholder="Agrega una descripción sobre ti..."
          multiline
          rows={4}
          margin="dense"
          fullWidth
          error={formState?.zodErrors?.description}
          helperText={formState?.zodErrors?.description}
        />
        {/* <TextField
          name="facebook"
          type="text"
          label="Facebook"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Facebook />
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
          margin="dense"
          placeholder="https://facebook.com/johndoe"
          //   error={formState?.zodErrors?.identifier}
          //   helperText={formState?.zodErrors?.identifier}
        />
        <TextField
          name="instagram"
          type="text"
          label="Instagram"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Instagram />
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
          margin="dense"
          placeholder="https://instagram.com/johndoe"
          //   error={formState?.zodErrors?.identifier}
          //   helperText={formState?.zodErrors?.identifier}
        />
                <TextField
          name="linkedin"
          type="text"
          label="LinkedIn"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LinkedIn />
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
          margin="dense"
          placeholder="https://linkedin.com/in/johndoe"
          //   error={formState?.zodErrors?.identifier}
          //   helperText={formState?.zodErrors?.identifier}
        />
                <TextField
          name="youtube"
          type="text"
          label="YouTube"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <YouTube />
                </InputAdornment>
              ),
            },
          }}
          variant="outlined"
          margin="dense"
          placeholder="https://youtube.com/@johndoe"
          //   error={formState?.zodErrors?.identifier}
          //   helperText={formState?.zodErrors?.identifier}
        /> */}
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Finalizar
        </Button>
        <StrapiErrors error={formState?.strapiErrors} />
      </FormControl>
    </form>
  );
};
