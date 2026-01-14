import { motion } from "framer-motion";
import useAutoNext from "../../hooks/useAutoNext";
import AutoTimer from "../AutoTimer";
import Lottie from "lottie-react";
import birthdayAnimation from "../../assets/lottie/Happy_Birthday.json";

export default function StepBirthday({ onNext }) {
  const time = useAutoNext(onNext, 5, "birthday");

  return (
    <motion.div
      className="screen center"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 1.5, opacity: 0, filter: "blur(20px)" }}
      transition={{ type: "spring", damping: 15 }}
    >
      <AutoTimer time={time} />

      <motion.div
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Lottie
          animationData={birthdayAnimation}
          loop={false}
          style={{ width: 350, maxWidth: "90vw", filter: "drop-shadow(0 0 20px rgba(255,255,255,0.2))" }}
        />
      </motion.div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.h1
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Happy Birthday 💖
        </motion.h1>
        <h2 style={{ color: "rgba(255,255,255,0.8)", marginTop: 10 }}>My Favorite Person</h2>
      </motion.div>
    </motion.div>
  );
}
