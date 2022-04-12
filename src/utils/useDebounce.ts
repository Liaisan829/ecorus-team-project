import { useEffect, useState } from "react";

interface Props {
  //value is boolean
  value: any,
  delay: number
}
//как применить интерфейс к функции

export default function useDebounce(value: boolean, delay: number) {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
