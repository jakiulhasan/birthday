import Lottie from "lottie-react";

export default function LottiePlayer({ src, loop = true, size = 260 }) {
  return (
    <div style={{ width: size }}>
      <Lottie animationData={src} loop={loop} />
    </div>
  );
}
