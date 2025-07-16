import { Formik, Form, Field } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import style from "./Login.module.css";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .matches(/[A-Z]/, "Minimum one capital letter")
    .matches(/[0-9]/, "Minimum one digit")
    .max(50, "Too Long!"),
  email: Yup.string().email("Invalid email").required("Required"),
});

interface Credentials {
  email: string;
  password: string;
}

const Login = () => {
  const [message, setMessage] = useState("");
  const { setIsAuthorized } = useCurrentUser();
  const navigate = useNavigate();

  async function fetchLogin(credentials: Credentials) {
    const res = await fetch(`https://api.escuelajs.co/api/v1/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "Application/JSON" },
      body: JSON.stringify(credentials),
    });
    if (res.ok) {
      setMessage("Successfully sign in");
      const { access_token } = await res.json();
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("isAuthorized", "true");
      setIsAuthorized(true);
      navigate("/account/user-information");
    }
  }

  return (
    <section className={style.mainSection}>
      <div className={style.mainDiv}>
        <h1>Sign in</h1>
        {message ? <div>{message}</div> : null}
        <Formik
          initialValues={{
            password: "",
            email: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values
            //console.log(values);
            fetchLogin(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className={style.mainForm}>
              <div className={style.formRow}>
                <label>Email:</label>
                <Field name="email" type="email" as="input" />
                <div className={style.error}>
                  {errors.email && touched.email ? errors.email : null}
                </div>
              </div>
              <div className={style.formRow}>
                <label>Password:</label>
                <Field name="password" type="password" as="input" />
                <div className={style.error}>
                  {errors.password && touched.password ? errors.password : null}
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

export default Login;
