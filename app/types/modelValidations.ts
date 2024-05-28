import * as yup from "yup";
import { CFormKeys } from "./definitions";

export const schema = yup
  .object({
    [CFormKeys.FIRST_NAME]: yup
      .string()
      .matches(/^[A-Za-z]+$/, "Only letters are allowed")
      .required("First name is required"),
    [CFormKeys.LAST_NAME]: yup
      .string()
      .matches(/^[A-Za-z]+$/, "Only letters are allowed")
      .required("Last name is required"),
    [CFormKeys.EMAIL]: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
    [CFormKeys.PHONE_NUMBER]: yup.string(),
    [CFormKeys.COMPANY]: yup.string().max(80, ""),
    [CFormKeys.SUBJECT]: yup.string().max(80, ""),
    [CFormKeys.MESSAGE]: yup.string().max(500, ""),
    [CFormKeys.RECAPTCHA]: yup
      .string()
      .required("You must confirm that you are not a robot"),
  })
  .required();
