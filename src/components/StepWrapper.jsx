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

export default function StepWrapper() {
  const [step, setStep] = useState(0);
  const Current = steps[step];

  return <Current onNext={() => setStep(step + 1)} />;
}
