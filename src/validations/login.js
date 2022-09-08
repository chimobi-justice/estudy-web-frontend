import * as Yup from "yup";

export const validateSchema = Yup.object({
  emailAddress: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  password: Yup.string()
    .required("Required")
});
