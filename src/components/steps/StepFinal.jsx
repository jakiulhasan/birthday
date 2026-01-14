import { motion } from "framer-motion";

export default function StepFinal() {
  return (
    <motion.div
      className="screen center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        animate={{
          filter: ["drop-shadow(0 0 10px #ff5fa2)", "drop-shadow(0 0 30px #ff5fa2)", "drop-shadow(0 0 10px #ff5fa2)"]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.h1
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Happy Birthday 💖
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p style={{ fontSize: "1.5rem", marginBottom: 10 }}>I’m grateful you exist.</p>
        <p style={{ fontSize: "1.2rem", opacity: 0.8 }}>Always.</p>
      </motion.div>
    </motion.div>
  );
}
