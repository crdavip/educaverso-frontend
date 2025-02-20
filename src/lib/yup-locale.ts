import { setLocale } from 'yup';

function setYupLocale() {
  setLocale({
    mixed: {
      default: 'Inválido',
      required: 'Este campo es requerido',
    },
    string: {
      email: 'Debe de ser un email válido',
      length: 'Tiene que contener 6 caracteres',
    },
  });
}

export default setYupLocale;
