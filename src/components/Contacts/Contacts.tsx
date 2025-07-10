import style from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <section className={style.section}>
      <div className={style.mainDiv}>
        <h2>Contacts</h2>
        <p>Phone number: +123 456 78 91</p>
        <p>E-mail: someemail@domain.com</p>
      </div>
    </section>
  );
};
