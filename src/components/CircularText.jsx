import { useEffect } from 'react';
import { motion, useAnimation, useMotionValue } from 'motion/react';

const getRotationTransition = (duration, from, loop = true) => ({
  from,
  to: from + 360,
  ease: 'linear',
  duration,
  type: 'tween',
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration, from) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: 'spring',
    damping: 20,
    stiffness: 300,
  },
});

const CircularText = ({
  text,
  spinDuration = 20,
  onHover = 'speedUp',
  className = '',
  centerImage = '',
  radius = 80,
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  }, [spinDuration, text, onHover, controls, rotation]);

  const handleHoverStart = () => {
    const start = rotation.get();
    if (!onHover) return;

    let transitionConfig;
    let scaleVal = 1;

    switch (onHover) {
      case 'slowDown':
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case 'speedUp':
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case 'pause':
        controls.stop();
        return;
      case 'goBonkers':
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  };

  const size = (radius + 20) * 2;

  return (
    <motion.div
      className={`relative mx-auto cursor-pointer ${className}`}
      style={{
        width: size,
        height: size,
        rotate: rotation,
      }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {centerImage && (
        <img
          src={centerImage}
          alt="center"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full object-cover z-10 pointer-events-none"
          style={{ width: radius * 0.75, height: radius * 0.75 }}
        />
      )}

      {letters.map((letter, i) => {
        const angleDeg = (360 / letters.length) * i - 90;
        const angleRad = (angleDeg * Math.PI) / 180;
        const x = radius * Math.cos(angleRad);
        const y = radius * Math.sin(angleRad);
        const cx = size / 2;
        const cy = size / 2;

        return (
          <span
            key={i}
            className="absolute text-xs font-bold text-white leading-none select-none"
            style={{
              left: cx + x,
              top: cy + y,
              transform: `translate(-50%, -50%) rotate(${angleDeg + 90}deg)`,
              transformOrigin: 'center center',
            }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
