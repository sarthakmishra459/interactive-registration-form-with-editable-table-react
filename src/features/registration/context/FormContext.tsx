import  { createContext, useContext } from "react";
import type { FormContextType } from "../types/form-context";

export const FormContext = createContext<FormContextType | null>(null);

export const useFormContext = () => {
  const ctx = useContext(FormContext);
  if (!ctx) {
    throw new Error("useFormContext must be used inside FormProvider");
  }
  return ctx;
};

