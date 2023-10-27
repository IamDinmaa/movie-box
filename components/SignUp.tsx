"use client";
import app from "@/app/Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
function SignUp() {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpToken = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        alert("successfully created an account");
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
          firstName: "",
          lastName: "",
          email: "",
          passWord: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          passWord: Yup.string()
            .matches(
              /([a-zA-Z]+)([0-9]+)([!@#$%^&*()_+{}\[\]:;<>,.?~=-]+)/,

              "Must contain alphabets, numbers and special characters"
            )
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}>
        <Form className="flex flex-col items-center mt-12">
          <h2 className="text-xl font-bold mb-3">Sign Up</h2>

          <Field
            name="firstName"
            type="text"
            placeholder="First Name"
            className="bg-slate-800 mb-4 w-96 p-8 "
          />
          <ErrorMessage name="firstName" />
          <Field
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="bg-slate-800 mb-4 w-96 p-8"
          />
          <ErrorMessage name="lastName" />
          <Field
            name="email"
            type="email"
            placeholder="Email"
            className="bg-slate-800 mb-4 w-96 p-8"
          />
          <ErrorMessage name="email" />
          <Field
            name="passWord"
            placeholder="Password"
            className="bg-slate-800 mb-4 w-96 p-8"
          />
          <ErrorMessage name="passWord" />
          <button type="submit" className="bg-slate-600 w-40 h-10 mb-2">
            Submit
          </button>
          <p>
            Already have an account with Movie box? <a href="#">Sign In</a>
          </p>
        </Form>
      </Formik>
    </>
  );
}
export default SignUp;
