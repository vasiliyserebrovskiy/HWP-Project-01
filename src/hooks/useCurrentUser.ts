import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useCurrentUser = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useUser must be used within AuthProvider");
  }

  return context;
};
