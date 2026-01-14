import { useState } from "react";
import CountdownGate from "./components/CountdownGate";
import StepWrapper from "./components/StepWrapper";

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <>
      <div className="bg-gradient" />
      <div className="bg-blob blob-1" />
      <div className="bg-blob blob-2" />
      {!unlocked ? (
        <CountdownGate onUnlock={() => setUnlocked(true)} />
      ) : (
        <StepWrapper />
      )}
    </>
  );
}
