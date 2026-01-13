import { useEffect, useState } from "react";

export default function useAutoNext(onNext, duration = 10, key = "") {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [key]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onNext();
      return;
    }

    const t = setTimeout(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearTimeout(t);
  }, [timeLeft]);

  return timeLeft;
}
