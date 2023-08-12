import * as yup from "yup";

export const tripFormSchema = yup.object().shape({
  duration: yup.number().required("Required"),
  trip: yup.string().required("Required"),
  date: yup.string().required("Required"),
  numberOfPeople: yup.number().min(1).required("Required"),
});
