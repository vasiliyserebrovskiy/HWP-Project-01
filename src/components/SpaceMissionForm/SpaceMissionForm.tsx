import { useState } from "react";
import style from "./SpaceMissionForm.module.css";

export default function SpaceMissionForm() {
  const formName = "Enter you Name: ";
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>(
    "The result message will be here..."
  );
  const [planet, setPlanet] = useState<string>("Mars");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name === "") {
      setMessage("Please enter your name to begin your mission.");
    } else {
      setMessage(`Astronaut ${name} is headed to ${planet}!`);
    }
  };

  return (
    <div className={style.divWrapper}>
      <form className={style.mainForm} onSubmit={handleSubmit}>
        <h2>Space Mission Form</h2>
        <label htmlFor="">
          {formName}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <select
          name="planet"
          value={planet}
          onChange={(e) => setPlanet(e.target.value)}
        >
          <option value="Mars">Mars</option>
          <option value="Venus">Venus</option>
          <option value="Jupiter">Jupiter</option>
          <option value="Saturn">Saturn</option>
        </select>
        <button type="submit" className={style.btnSubmit}>
          Submit
        </button>
        <p>{message}</p>
      </form>
    </div>
  );
}
