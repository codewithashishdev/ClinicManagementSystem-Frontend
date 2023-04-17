import * as Yup from "yup";

export const userSchema = Yup.object({
  UserType: Yup.string().required("Select Your Role"),
  email: Yup.string().email("Please Enter valid email").required("Please enter your email"),
  password: Yup.string().min(6).required("Please enter your password"),

});