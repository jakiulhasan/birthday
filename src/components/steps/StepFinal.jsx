import { motion } from "framer-motion";

export default function StepFinal() {
  return (
    <motion.div
      className="screen center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>Happy Birthday 💖</h1>
      <p>I’m grateful you exist.</p>
      <p>Always.</p>
    </motion.div>
  );
}
