import { motion } from "framer-motion";
import useAutoNext from "../../hooks/useAutoNext";
import AutoTimer from "../AutoTimer";
import Lottie from "lottie-react";

export default function StepBirthday({ onNext }) {
  const time = useAutoNext(onNext, 10, "birthday");

  return (
    <motion.div
      className="screen center gradient"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <AutoTimer time={time} />

      <Lottie
        animationData={null}
        path="/lottie/Happy_Birthday.json"
        loop={false}
        style={{ width: 280 }}
      />

      <h1>Happy Birthday 💖</h1>
      <h2>My Favorite Person</h2>
    </motion.div>
  );
}
