import { motion } from "framer-motion";
import useAutoNext from "../../hooks/useAutoNext";
import AutoTimer from "../AutoTimer";
import Lottie from "lottie-react";

export default function StepGift({ onNext }) {
  const time = useAutoNext(onNext, 10, "gift");

  return (
    <motion.div className="screen center">
      <AutoTimer time={time} />

      <Lottie
        animationData={null}
        path="/lottie/Gift_Box_Lottie_Animation.json"
        loop
        style={{ width: 260 }}
      />

      <p>I got something for you… 🎁</p>
    </motion.div>
  );
}
