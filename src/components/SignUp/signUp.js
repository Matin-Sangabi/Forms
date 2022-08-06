import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import "./signUp.css";
import Input from "../inputs/Inputs";
import Radio from "../radios/Radios";





const initialValues = {
  name: "",
  email: "",
  password: "",
  phonenumber: "",
  ConfrimPassword: "",
  gender: "",
};

const onSubmit = (value) => {
  console.log(value);
};



const validationSchema = Yup.object({
  name: Yup.string().required("name is not required"),
  email: Yup.string().email("email was invalid").required("email not required"),
  phonenumber: Yup.string()
    .matches(/^[0-9]{11}/, "phone number invalid")
    .required("phone number not required"),
  password: Yup.string().required("password was not required"),
  ConfrimPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "password must be matched")
    .required("password confrim not required"),
  gender: Yup.string().required("gender not required"),
});

const SignUp = () => {
  const [users, setUsers] = useState();
  
  const formik = useFormik({
    initialValues : users || initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize : true,
  });
  const inputs = [
    { name: "name", formik: formik, label: "Name" },
    { name: "email", formik: formik, label: "email" },
    { name: "phonenumber", formik: formik, label: "Phone Number" },
    {
      name: "password",
      formik: formik,
      label: "Password",
      type: "password",
      autoComplete: "off",
    },
    {
      name: "ConfrimPassword",
      formik: formik,
      label: "Confrim Password",
      autoComplete: "off",
      type: "password",
    },
  ];
  const radios = [
    {  label: "Male", value: "0", htmlFor: "male" },
    {  label: "Fmale", value: "1", htmlFor: "fmale" }
  ];
  useEffect(() => {
    axios
      .get("http://localhost:3001/users/1")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <div className="signup">
      <form onSubmit={formik.handleSubmit} className="forms">
        {inputs.map((item, index) => {
          return <Input key={index} {...item} />;
        })}
        <div className="radiogroup">
          <h4>Please Select the Gender :</h4>
          <Radio radios = {radios} formik={formik}/>
        </div>
        <button type="submit" disabled={!formik.isValid}>
          Add
        </button>
      </form>
    </div>
  );
};

export default SignUp;
