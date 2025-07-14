import { Formik, Form, Field } from "formik";
// import { useState } from "react";
import * as Yup from "yup";
import style from "./AddProduct.module.css";
import useAddProduct from "../../hooks/useAddProduct";

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  price: Yup.number().typeError("Price must be a number").required("Required"),
  description: Yup.string()
    .required("Required")
    .min(2, "Too Short!")
    .max(500, "Too Long!"),
  image1: Yup.string()
    .min(2, "Too Short!")
    .max(240, "Too Long!")
    .url("Must be a valid URL")
    .required("At least one image required"),
  image2: Yup.string()
    .min(2, "Too Short!")
    .max(240, "Too Long!")
    .url("Must be a valid URL")
    .notRequired(),
  image3: Yup.string()
    .min(2, "Too Short!")
    .max(240, "Too Long!")
    .url("Must be a valid URL")
    .notRequired(),
});

const AddProduct = () => {
  const { message, errMessage, addProduct } = useAddProduct();

  return (
    <section className={style.mainSection}>
      <div className={style.mainDiv}>
        <h1>Add new product</h1>
        {message && <div className={style.message}>{message}</div>}
        {errMessage && <div className={style.errMessage}>{errMessage}</div>}
        <Formik
          initialValues={{
            title: "",
            price: "",
            description: "",
            image1: "",
            image2: "",
            image3: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { resetForm }) => {
            const images = [values.image1, values.image2, values.image3].filter(
              Boolean
            );
            addProduct({
              title: values.title,
              price: Number(values.price),
              description: values.description,
              categoryId: Number(30),
              images: images,
            });
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form className={style.mainForm}>
              <div className={style.formRow}>
                <label>Title:</label>
                <Field name="title" as="input" />
                <div className={style.error}>
                  {errors.title && touched.title ? errors.title : null}
                </div>
              </div>
              <div className={style.formRow}>
                <label>Product price:</label>
                <Field name="price" />
                <div className={style.error}>
                  {errors.price && touched.price ? errors.price : null}
                </div>
              </div>
              <div className={style.formRow}>
                <label>Description:</label>
                <Field name="description" />
                <div className={style.error}>
                  {errors.description && touched.description
                    ? errors.description
                    : null}
                </div>
              </div>
              <div className={style.formRow}>
                <label>Image:</label>
                <Field name="image1" />
                <div className={style.error}>
                  {errors.image1 && touched.image1 ? errors.image1 : null}
                </div>
              </div>
              <div className={style.formRow}>
                <label>Image:</label>
                <Field name="image2" />
                <div className={style.error}>
                  {errors.image2 && touched.image2 ? errors.image2 : null}
                </div>
              </div>
              <div className={style.formRow}>
                <label>Image:</label>
                <Field name="image3" />
                <div className={style.error}>
                  {errors.image3 && touched.image3 ? errors.image3 : null}
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

export default AddProduct;
