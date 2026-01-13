import { motion } from "framer-motion";
import useAutoNext from "../../hooks/useAutoNext";
import AutoTimer from "../AutoTimer";

export default function StepIntro({ onNext }) {
  const time = useAutoNext(onNext);

  return (
    <motion.div
      className="screen center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <AutoTimer time={time} />
      <h1>Hey…</h1>
      <p>It’s finally your day.</p>
    </motion.div>
  );
}
