import * as Yup from "yup";

export default function handleErrors() {}

export const loginSchema = Yup.object({
  email: Yup.string().email("Un email valide est requis"),
  password: Yup.string().min(7, "Minimum 7 caractères"),
});

export const addSchema = Yup.object({
  name: Yup.string().min(3, "Minimum 5 caractères"),
  email: Yup.string().email("Un email valide est requis"),
  password: Yup.string().min(7, "Minimum 7 caractères"),
  role: Yup.string().required("Un role est requis"),
});

export const editSchema = Yup.object({
  name: Yup.string().min(3, "Minimum 5 caractères"),
  email: Yup.string().email("Un email valide est requis"),
  role: Yup.string().required("Un role est requis"),
});

export const passwordSchema = Yup.object({
  password: Yup.string().min(7, "Minimum 7 caractères"),
});
