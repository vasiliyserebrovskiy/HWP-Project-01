import { createContext } from "react";

interface CounterContextType {
  counter: number;
  setCounter: (counter: number) => void;
}
export const CounterContext = createContext<CounterContextType | undefined>(
  undefined
);
