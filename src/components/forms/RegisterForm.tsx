"use client";

import { useActionState, useState } from "react";
import {
  AccountBox,
  AccountBoxOutlined,
  EmailOutlined,
  InsertPhoto,
  LockOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from "@mui/icons-material";
import {
  FormControl,
  TextField,
  InputAdornment,
  Button,
  Box,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { registerUserAction } from "@/data";
import { StrapiErrors } from "../custom/StrapiErrors";
import { getSchemaShape, schemaRegisterSteps } from "@/schemas";
import { Profession, ProfessionalCategories } from "@/interfaces";

const steps = ["Acceso", "Datos", "Perfil", "Vista"];

interface Props {
  categories: ProfessionalCategories[];
  professions: Profession[];
}

export const RegisterForm = ({ categories, professions }: Props) => {
  const [initialState, setInitialState] = useState({
    data: {
      username: "",
      email: "",
    },
  });
  const [category, setCategory] = useState("");
  const [profession, setProfession] = useState("");
  const [professionByCategory, setProfessionByCategory] = useState<Profession[]>([]);
  const [formState, formAction] = useActionState(registerUserAction, initialState);

  const [showPass, setShowPass] = useState(false);
  const [showRepeatPass, setShowRepeatPass] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [stepErrors, setStepErrors] = useState<Record<string, string>>({});

  const onShowPass = () => {
    setShowPass(!showPass);
  };
  const onShowRepeatPass = () => {
    setShowRepeatPass(!showRepeatPass);
  };

  const handleChangeCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
    const data = professions.filter((profession) => profession.category.id == (+event.target.value + 1));
    setProfessionByCategory(data);
    console.log(professions);
  };
  const handleChangeProfession = (event: SelectChangeEvent) => {
    setProfession(event.target.value as string);
  };

  const handleNext = () => {
    const formElement = document.querySelector("form");
    if (!formElement) {
      return;
    }

    const form = new FormData(formElement);
    const currentStepSchema = schemaRegisterSteps[activeStep];
    const shape = getSchemaShape(currentStepSchema);
    const fields = Object.fromEntries(form.entries());

    if (activeStep === 2) {
      fields["category"] = category;
      fields["profession"] = profession;
    }

    const stepData: Record<string, unknown> = {};
    Object.keys(shape).forEach((key) => {
      if (fields[key] !== undefined) {
        stepData[key] = fields[key];
      }
    });

    const result = currentStepSchema.safeParse(stepData);

    setInitialState((prevState) => ({
      ...prevState,
      data: {
        ...prevState.data,
        ...result.data,
      },
    }));

    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) newErrors[err.path[0] as string] = err.message;
      });
      setStepErrors(newErrors);
      return;
    }

    setStepErrors({});
    setActiveStep((prev) => {
      const next = prev + 1;
      return next;
    });
  };
  const handleBack = () => setActiveStep((prev) => prev - 1);

  return (
    <form action={formAction}>
      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <FormControl fullWidth sx={{ mt: 2 }}>
        {/* Paso 1*/}
        <FormControl sx={{ display: activeStep === 0 ? "" : "none" }}>
          <TextField
            name="username"
            type="text"
            label="Usuario"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountBoxOutlined />
                  </InputAdornment>
                ),
              },
            }}
            variant="outlined"
            margin="dense"
            placeholder="johnDoe"
            error={formState?.zodErrors?.username || stepErrors.username}
            helperText={formState?.zodErrors?.username || stepErrors.username}
          />
          <TextField
            name="email"
            type="email"
            label="Correo Electrónico"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlined />
                  </InputAdornment>
                ),
              },
            }}
            variant="outlined"
            margin="dense"
            placeholder="johndoe@correo.com"
            error={formState?.zodErrors?.email || stepErrors.email}
            helperText={formState?.zodErrors?.email || stepErrors.email}
          />
          <TextField
            name="password"
            type={showPass ? "text" : "password"}
            label="Contraseña"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end" onClick={onShowPass} sx={{ cursor: "pointer" }}>
                    {!showPass ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
                  </InputAdornment>
                ),
              },
            }}
            variant="outlined"
            margin="dense"
            placeholder="Ingresa tu contraseña"
            error={formState?.zodErrors?.password || stepErrors.password}
            helperText={formState?.zodErrors?.password || stepErrors.password}
            autoComplete="off"
          />
          <TextField
            name="repeatPassword"
            type={showRepeatPass ? "text" : "password"}
            label="Confirmar Contraseña"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlined />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end" onClick={onShowRepeatPass} sx={{ cursor: "pointer" }}>
                    {!showRepeatPass ? <VisibilityOutlined /> : <VisibilityOffOutlined />}
                  </InputAdornment>
                ),
              },
            }}
            variant="outlined"
            margin="dense"
            placeholder="Repite tu contraseña"
            error={formState?.zodErrors?.repeatPassword || stepErrors.repeatPassword}
            helperText={formState?.zodErrors?.repeatPassword || stepErrors.repeatPassword}
            autoComplete="off"
          />
        </FormControl>

        {/* Paso 2*/}
        <FormControl sx={{ display: activeStep === 1 ? "" : "none" }}>
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
            error={formState?.zodErrors?.firstname || stepErrors.firstname}
            helperText={formState?.zodErrors?.firstname || stepErrors.firstname}
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
            error={formState?.zodErrors?.lastname || stepErrors.lastname}
            helperText={formState?.zodErrors?.lastname || stepErrors.lastname}
          />
          <FormControl margin="dense">
            <FormLabel id="gender-group-label" error={formState?.zodErrors?.gender || stepErrors.gender}>
              {(formState?.zodErrors?.gender || stepErrors.gender) ?? "Género"}
            </FormLabel>
            <RadioGroup row aria-labelledby="gender-group-label" name="gender" defaultValue="">
              <FormControlLabel value="Hombre" control={<Radio size="small" />} label="Hombre" />
              <FormControlLabel value="Mujer" control={<Radio size="small" />} label="Mujer" />
              <FormControlLabel value="Otro" control={<Radio size="small" />} label="Otro" />
            </RadioGroup>
          </FormControl>
        </FormControl>

        {/* Paso 3 */}
        <FormControl sx={{ display: activeStep === 2 ? "" : "none" }}>
          <FormControl margin="dense">
            <InputLabel id="select-category" error={formState?.zodErrors?.category || stepErrors.category}>
              {(formState?.zodErrors?.category || stepErrors.category) ?? "Categoría"}
            </InputLabel>
            <Select
              labelId="select-category"
              value={category}
              label="Categoría"
              name="category"
              onChange={handleChangeCategory}
              error={formState?.zodErrors?.category || stepErrors.category}
            >
              {categories.map((category) => (
                <MenuItem key={category.documentId} value={category.id - 1}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl margin="dense">
            <InputLabel id="select-profession" error={formState?.zodErrors?.profession || stepErrors.profession}>
              {(formState?.zodErrors?.profession || stepErrors.profession) ?? "Profesión"}
            </InputLabel>
            <Select
              labelId="select-profession"
              value={profession}
              label="Profesión"
              name="profession"
              defaultValue={profession}
              onChange={handleChangeProfession}
              error={formState?.zodErrors?.profession || stepErrors.profession}
              disabled={!category}
            >
              {professionByCategory.map((option) => (
                <MenuItem key={option.id} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            type="text"
            name="description"
            label="Descripción"
            placeholder="Agrega una descripción sobre ti..."
            multiline
            rows={4}
            margin="dense"
            fullWidth
            error={formState?.zodErrors?.description || stepErrors.description}
            helperText={formState?.zodErrors?.description || stepErrors.description}
          />
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
            error={formState?.zodErrors?.profileImage || stepErrors.profileImage}
            helperText={formState?.zodErrors?.profileImage || stepErrors.profileImage}
          />
        </FormControl>

        {/* Paso 4 */}
        <Box sx={{ display: activeStep === 3 ? "" : "none" }}>
          <Typography variant="h5" fontWeight={700}>
            Vista Previa
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography variant="body1" fontWeight={700}>
              Usuario:
            </Typography>
            <Typography variant="body1" fontWeight={500}>
              {initialState.data.username}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography variant="body1" fontWeight={700}>
              Correo:
            </Typography>
            <Typography variant="body1" fontWeight={500}>
              {initialState.data.email}
            </Typography>
          </Box>
        </Box>

        {/* Navegación de pasos */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Atrás
          </Button>
          {activeStep < steps.length - 1 ? (
            <Button onClick={handleNext}>Siguiente</Button>
          ) : (
            <Button type="submit" variant="contained">
              Finalizar
            </Button>
          )}
        </Box>

        <StrapiErrors error={formState?.strapiErrors || formState?.message} />
      </FormControl>
    </form>
  );
};
