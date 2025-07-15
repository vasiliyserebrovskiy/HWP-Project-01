import styles from "./Counter.module.css";
import { useCounter } from "../../hooks/useCounter";
export const Counter = () => {
  // const initialValue = 0;
  // const [counter, setCounter] = useState<number>(initialValue);
  const { counter, setCounter } = useCounter();

  function handlePLus() {
    setCounter(counter + 1);
  }

  function handleMinus() {
    setCounter(counter - 1);
  }
  function handleReset() {
    setCounter(0);
  }
  return (
    <section className={styles.maiSection}>
      <div className={styles.mainDiv}>
        <h2>Counter: {counter}</h2>
        <div className={styles.buttonDiv}>
          <button
            type="button"
            onClick={handleMinus}
            className={styles.handleMinus}
          >
            -1
          </button>

          <button
            type="button"
            onClick={handleReset}
            className={styles.handleReset}
          >
            Reset
          </button>

          <button
            type="button"
            onClick={handlePLus}
            className={styles.handlePlus}
          >
            +1
          </button>
        </div>
      </div>
    </section>
  );
};
