import { useState } from "react";

export const useErrors = () => {
  const [errors, setErrors] = useState<string[]>([]);

  const clearErrors = () => {
    setErrors([]);
  };

  return {
    errors,
    setErrors,
    clearErrors,
  };
};
