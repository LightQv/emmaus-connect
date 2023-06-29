import * as Yup from "yup";

export default function handleErrors() {}

export const loginSchema = Yup.object({
  email: Yup.string().email("Un email valide est requis"),
  password: Yup.string().min(7, "Minimum 7 caractères"),
});

export const formSchema = Yup.object({
  brand: Yup.string().min(3, "Minimum 3 caractères"),
  model: Yup.string().min(3, "Minimum 3 caractères"),
  ram: Yup.number(),
  storage: Yup.number(),
  color: Yup.string().min(2, "Minimum 2 caractères"),
  state: Yup.string().min(3, "Minimum 3 caractères"),
  screen: Yup.number(),
  network: Yup.string().min(2, "Minimum 2 caractères"),
});
