import { motion } from "framer-motion";

export default function AutoTimer({ time }) {
  const progress = (time / 10) * 360;

  return (
    <div className="auto-timer">
      <svg width="50" height="50">
        <circle
          cx="25"
          cy="25"
          r="22"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="3"
          fill="none"
        />
        <motion.circle
          cx="25"
          cy="25"
          r="22"
          stroke="#ff5fa2"
          strokeWidth="3"
          fill="none"
          strokeDasharray="138"
          strokeDashoffset={(1 - time / 10) * 138}
        />
      </svg>
      <span>{time}s</span>
    </div>
  );
}
