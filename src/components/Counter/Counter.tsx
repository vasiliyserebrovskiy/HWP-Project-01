import styles from "./Counter.module.css";
import { useCounter } from "../../hooks/useCounter";
export const Counter = () => {
  // const initialValue = 0;
  // const [counter, setCounter] = useState<number>(initialValue);
  const { counter, increment, decrement, reset } = useCounter(10);

  return (
    <section className={styles.maiSection}>
      <div className={styles.mainDiv}>
        <h2>Counter: {counter}</h2>
        <div className={styles.buttonDiv}>
          <button
            type="button"
            onClick={decrement}
            className={styles.handleMinus}
          >
            -1
          </button>

          <button type="button" onClick={reset} className={styles.handleReset}>
            Reset
          </button>

          <button
            type="button"
            onClick={increment}
            className={styles.handlePlus}
          >
            +1
          </button>
        </div>
      </div>
    </section>
  );
};
