import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { memories } from "../../data/memories";
import useAutoNext from "../../hooks/useAutoNext";
import AutoTimer from "../AutoTimer";

export default function StepMemories({ onNext }) {
  const [i, setI] = useState(0);

  const time = useAutoNext(() => {
    if (i < memories.length - 1) {
      setI(i + 1);
    } else {
      onNext();
    }
  }, 5, i);

  const memory = memories[i];

  return (
    <motion.div
      className="screen center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <AutoTimer time={time} />

      <div style={{ position: "relative", width: "100%", maxWidth: 400, aspectRatio: "1/1", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden", borderRadius: 20 }}>
        <AnimatePresence mode="wait">
          <motion.img
            key={memory.img}
            src={memory.img}
            className="memory-img"
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 1.1, opacity: 0, rotate: 5 }}
            transition={{ duration: 0.5 }}
            style={{ position: "absolute", width: "100%", height: "100%", objectFit: "cover" }}
          />
        </AnimatePresence>
      </div>

      <motion.p
        key={memory.text}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginTop: 20, fontSize: "1.1rem", background: "rgba(0,0,0,0.3)", padding: "10px 20px", borderRadius: 20 }}
      >
        {memory.text}
      </motion.p>
    </motion.div>
  );
}
