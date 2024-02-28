import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const ROTATION_RANGE = 16;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const MovingCard = ({ children }) => {
  const ref = useRef(null);

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rY = (mouseX / width - HALF_ROTATION_RANGE);
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      className="relative h-[350px] lg:w-[45rem] sm:w-[30rem] xs:w-[25rem] w-72 rounded-xl"// lg:w-[45rem] sm:w-[30rem] xs:w-[25rem] w-72 
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 grid place-content-center rounded-xl shadow-lg bg-sky-900"// bg-gradient-to-br from-purple-900 to-purple-800
      >
        {children}
      </div>
    </motion.div>
  );
};

export default MovingCard;