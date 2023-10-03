"use client";

import { useConfetti } from "@/hooks/useConfetti";
import ReactConfetti from "react-confetti";

export const Confetti = () => {
  const { confetti } = useConfetti();

  return (
    <>
      {confetti.map((id) => (
        <ReactConfetti
          key={id}
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={800}
          tweenDuration={20000}
          initialVelocityY={-5}
        />
      ))}
    </>
  );
};
