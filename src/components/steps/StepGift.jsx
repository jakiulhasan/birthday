import { motion } from "framer-motion";
import useAutoNext from "../../hooks/useAutoNext";
import AutoTimer from "../AutoTimer";
import Lottie from "lottie-react";
import giftAnimation from "../../assets/lottie/Gift_Box_Lottie_Animation.json";

export default function StepGift({ onNext }) {
  const time = useAutoNext(onNext, 5, "gift");

  return (
    <motion.div
      className="screen center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: -50 }}
    >
      <AutoTimer time={time} />

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, -5, 5, -5, 5, 0]
        }}
        transition={{
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 0.5, repeat: Infinity, repeatDelay: 1 }
        }}
      >
        <Lottie
          animationData={giftAnimation}
          loop
          style={{ width: 300, filter: "drop-shadow(0 0 30px rgba(255, 95, 162, 0.4))" }}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{ fontSize: "1.4rem", fontWeight: 600 }}
      >
        I got something for you… 🎁
      </motion.p>
    </motion.div>
  );
}
