import { motion } from "framer-motion";
import useAutoNext from "../../hooks/useAutoNext";
import AutoTimer from "../AutoTimer";

export default function StepMessage({ onNext }) {
  const time = useAutoNext(onNext);

  return (
    <motion.div
      className="screen center"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <AutoTimer time={time} />
      <div className="card">
        <p>তোমাকে ভালোবাসা মানে শান্তি। তোমাকে পাওয়া মানে ভাগ্য।</p>
      </div>
    </motion.div>
  );
}
