import { motion } from "framer-motion";
import useAutoNext from "../../hooks/useAutoNext";
import AutoTimer from "../AutoTimer";

export default function StepIntro({ onNext }) {
  const time = useAutoNext(onNext, 5);

  const sentence = "It’s finally your day.".split("");

  return (
    <motion.div
      className="screen center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8 }}
    >
      <AutoTimer time={time} />
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
      >
        Hey…
      </motion.h1>
      <p style={{ fontSize: "1.5rem", color: "rgba(255,255,255,0.9)", display: "flex", gap: "2px" }}>
        {sentence.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.05 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </p>
    </motion.div>
  );
}
