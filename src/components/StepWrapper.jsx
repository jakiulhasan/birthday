import StepIntro from "./steps/StepIntro";
import StepGift from "./steps/StepGift";
import StepBirthday from "./steps/StepBirthday";
import StepMessage from "./steps/StepMessage";
import StepMemories from "./steps/StepMemories";
import StepWhy from "./steps/StepWhy";
import StepFinal from "./steps/StepFinal";
import { useState } from "react";

const steps = [
  StepIntro,
  StepGift, // 🎁 NEW
  StepBirthday, // 🎉 LOTTIE
  StepMessage,
  StepMemories,
  StepWhy,
  StepFinal,
];

import { AnimatePresence, motion } from "framer-motion";

export default function StepWrapper() {
  const [step, setStep] = useState(0);
  const Current = steps[step];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5 }}
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Current onNext={() => setStep(step + 1)} />
      </motion.div>
    </AnimatePresence>
  );
}
