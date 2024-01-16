import * as yup from "yup"

export const loginSchema = yup.object().shape({
    email: yup.string().email().required("Please insert a valid email"),
    password: yup.string().min(8, "Must be at least 8 characters").required()
})

export const signUpSchema = yup.object().shape({
    full_name: yup.string().required("Full Name is required"),
    phone_number: yup.string().required("Phone Number is required"),
    email: yup.string().email("Please provide a valid email").required("Email is required"),
    password: yup.string().min(8, "Must be at least 8 characters").required(),
    password1: yup.string().oneOf([yup.ref("password"), null], "Passwords don't match...").required("Please confirm your password")
})