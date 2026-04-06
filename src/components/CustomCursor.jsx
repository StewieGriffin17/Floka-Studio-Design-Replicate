import { useEffect, useState, useCallback } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const sync = () => setActive(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const onMove = useCallback((e) => {
    setPos({ x: e.clientX, y: e.clientY });
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!active) return;

    const root = document.documentElement;
    root.classList.add("custom-cursor-on");

    const hide = () => setVisible(false);
    const show = () => setVisible(true);

    const onVis = () => {
      if (document.visibilityState === "hidden") hide();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("blur", hide);
    document.addEventListener("visibilitychange", onVis);
    document.addEventListener("mouseenter", show);
    document.addEventListener("mouseleave", hide);

    return () => {
      root.classList.remove("custom-cursor-on");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("blur", hide);
      document.removeEventListener("visibilitychange", onVis);
      document.removeEventListener("mouseenter", show);
      document.removeEventListener("mouseleave", hide);
    };
  }, [active, onMove]);

  if (!active) return null;

  return (
    <div
      aria-hidden
      className="custom-cursor-ring pointer-events-none fixed z-[2147483647] left-0 top-0 will-change-transform"
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.2s ease",
      }}
    >
      <span className="custom-cursor-dot" />
    </div>
  );
}
