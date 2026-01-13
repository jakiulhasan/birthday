import { motion } from "framer-motion";
import useAutoNext from "../../hooks/useAutoNext";
import AutoTimer from "../AutoTimer";

export default function StepWhy({ onNext }) {
  const time = useAutoNext(onNext);

  return (
    <motion.div
      className="screen center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <AutoTimer time={time} />
      <div className="card">
        <p>You make ordinary days beautiful.</p>
        <p>You feel like home.</p>
        <p>You are my safe place.</p>
      </div>
    </motion.div>
  );
}
