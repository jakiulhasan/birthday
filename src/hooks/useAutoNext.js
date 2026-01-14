import { useEffect, useState, useRef } from "react";

export default function useAutoNext(onNext, duration = 10, key = "") {
  const [timeLeft, setTimeLeft] = useState(duration);
  const onNextRef = useRef(onNext);

  useEffect(() => {
    onNextRef.current = onNext;
  }, [onNext]);

  useEffect(() => {
    setTimeLeft(duration);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onNextRef.current();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [key, duration]);

  return timeLeft;
}
