import { motion } from "framer-motion";
import useAutoNext from "../../hooks/useAutoNext";
import AutoTimer from "../AutoTimer";

export default function StepMessage({ onNext }) {
  const time = useAutoNext(onNext, 5);

  return (
    <motion.div
      className="screen center"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <AutoTimer time={time} />
      <motion.div
        className="card"
        initial={{ scale: 0.9 }}
        animate={{
          scale: 1,
          y: [0, -10, 0],
          boxShadow: ["0 10px 30px rgba(0,0,0,0.2)", "0 20px 40px rgba(0,0,0,0.3)", "0 10px 30px rgba(0,0,0,0.2)"]
        }}
        transition={{
          scale: { duration: 0.5 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <p style={{ fontSize: "1.3rem", fontWeight: 500, lineHeight: 1.8 }}>
          তোমাকে ভালোবাসা মানে শান্তি। <br /> তোমাকে পাওয়া মানে ভাগ্য।
        </p>
      </motion.div>
    </motion.div>
  );
}
