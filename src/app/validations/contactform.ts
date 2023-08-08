import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  message: yup.string().required("Required"),
});
