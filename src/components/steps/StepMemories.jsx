import { useState } from "react";
import { motion } from "framer-motion";
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
  });

  const memory = memories[i];

  return (
    <motion.div
      className="screen center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <AutoTimer time={time} />

      <motion.img
        key={memory.img}
        src={memory.img}
        className="memory-img"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      />
      <p>{memory.text}</p>
    </motion.div>
  );
}
