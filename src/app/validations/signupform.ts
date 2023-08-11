import * as yup from "yup";

export const signUpFormSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  lastName: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup.string().min(6).max(99).required("Required"),
  confirmPassword: yup
    .string()
    .required("Required")
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.password === value;
    }),
});
