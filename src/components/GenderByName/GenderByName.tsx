import { useState } from "react";
import type { ResObj } from "./constants";
import style from "./GenderByName.module.css";
import ResponseSection from "./ResponseSection";

export const GenderByName = () => {
  const [name, setName] = useState<string>("");
  const [nameErrMsg, setNameErrMsg] = useState<string>("");
  const [data, setData] = useState<ResObj | null>(null);
  const [errMessage, setErrorMessage] = useState<string>("");

  async function fetchGender(name: string) {
    try {
      setErrorMessage("");
      const res = await fetch(`https://api.genderapi.io/api/?name=${name}`);
      if (res.status == 404) {
        setData(null);
        throw Error("To many request.Please wait.");
      }
      const resData: ResObj = await res.json();

      setData(resData);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setErrorMessage(err.message);
      }
    }
  }

  const validate = (name: string): boolean => {
    if (name.length >= 3) {
      setNameErrMsg("");
      return true;
    }
    setNameErrMsg("Name should be at least 3 symbols long!");
    setData(null);
    return false;
  };

  const handleButton = () => {
    if (validate(name)) {
      fetchGender(name);
    }
  };

  return (
    <section className={style.mainSection}>
      <div className={style.inputDiv}>
        <h2>Gender By Name</h2>
        <p style={{ color: "red" }}>{nameErrMsg}</p>
        {errMessage ? <p>{errMessage}</p> : null}
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="button" onClick={handleButton}>
          Send
        </button>
      </div>
      <div className={style.responseDiv}>
        {data ? <ResponseSection data={data} /> : <p>No data!</p>}
      </div>
    </section>
  );
};
