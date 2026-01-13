import { useState } from "react";
import CountdownGate from "./components/CountdownGate";
import StepWrapper from "./components/StepWrapper";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  return !unlocked ? (
    <CountdownGate onUnlock={() => setUnlocked(true)} />
  ) : (
    <StepWrapper />
  );
}
