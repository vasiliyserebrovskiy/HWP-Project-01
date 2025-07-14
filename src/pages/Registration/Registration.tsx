import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import style from "./Registration.module.css";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .matches(/[A-Z]/, "Minimum one capital letter")
    .matches(/[0-9]/, "Minimum one digit")
    .max(50, "Too Long!"),
  avatar: Yup.string()
    .min(2, "Too Short!")
    .max(240, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

interface Credentials {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

const Registrations = () => {
  const [message, setMessage] = useState("");

  async function fetchRegister(credentials: Credentials) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/users/`, {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(credentials),
    });
    if (res.ok) {
      setMessage("Successfully registered");
    }
  }

  return (
    <section className={style.mainSection}>
      <div className={style.mainDiv}>
        <h1>Sign up</h1>
        {message ? <div>{message}</div> : null}
        <Formik
          initialValues={{
            name: "",
            password: "",
            avatar: "",
            email: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
            fetchRegister(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className={style.mainForm}>
              <div className={style.formRow}>
                <label>Name:</label>
                <Field name="name" as="input" />
                <div className={style.error}>
                  {errors.name && touched.name ? errors.name : null}
                </div>
              </div>
              <div className={style.formRow}>
                <label>Password:</label>
                <Field name="password" type="password" as="input" />
                <div className={style.error}>
                  {errors.password && touched.password ? errors.password : null}
                </div>
              </div>
              <div className={style.formRow}>
                <label>Avatar:</label>
                <Field name="avatar" as="input" />
                <div className={style.error}>
                  {errors.avatar && touched.avatar ? errors.avatar : null}
                </div>
              </div>
              <div className={style.formRow}>
                <label>Email:</label>
                <Field name="email" type="email" as="input" />
                <div className={style.error}>
                  {errors.email && touched.email ? errors.email : null}
                </div>
              </div>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Registrations;
