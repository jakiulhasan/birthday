import { motion } from "framer-motion";
import useAutoNext from "../../hooks/useAutoNext";
import AutoTimer from "../AutoTimer";

export default function StepWhy({ onNext }) {
  const time = useAutoNext(onNext, 5);

  const reasons = [
    "✨ You make ordinary days beautiful.",
    "🏠 You feel like home.",
    "🛡️ You are my safe place."
  ];

  return (
    <motion.div
      className="screen center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      <AutoTimer time={time} />
      <div className="card" style={{ alignItems: "flex-start", textAlign: "left", gap: "16px" }}>
        {reasons.map((text, index) => (
          <motion.div
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 + index * 1.2 }}
            style={{ fontSize: "1.2rem", padding: "8px 0" }}
          >
            {text}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
