import * as yup from "yup";

export const newsletterSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
});
