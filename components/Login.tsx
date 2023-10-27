"use client";
import app from "@/app/Firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignIn = () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
      });
  };

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          passWord: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          passWord: Yup.string().required("required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}>
        <Form className="flex flex-col items-center mt-12">
          <h2 className="text-xl font-bold mb-3">Sign In</h2>
          <Field
            name="email"
            placeholder="Email"
            className="bg-slate-800 mb-4 w-96 p-8"
          />
          <ErrorMessage name="email" />
          <Field
            name="passWord"
            placeholder="Password"
            className="bg-slate-800 mb-4 w-96 p-8"
          />{" "}
          <ErrorMessage name="passWord" />
          <button
            type="submit"
            className="bg-slate-600 w-40 h-10 mb-2"
            onClick={SignIn}>
            Submit
          </button>{" "}
          <p>
            New to Movie box? <a href="#">Sign Up</a>
          </p>
        </Form>
      </Formik>
    </>
  );
}
export default SignIn;
