import { useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedNumber = ({ value, duration = 2, separator, start }) => {
  const [display, setDisplay] = useState(0);
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (!start) return;
    const controls = animate(motionValue, value, {
      duration,
      onUpdate: (latest) => setDisplay(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [value, duration, motionValue, start]);

  const formatted = separator ? display.toLocaleString() : display;

  return <span>{formatted}</span>;
};

export default AnimatedNumber;
