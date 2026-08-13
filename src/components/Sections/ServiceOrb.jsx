import { motion } from "framer-motion";

export default function ServiceOrb({ Icon }) {
  return (
    <div className="relative flex h-[360px] w-[360px] items-center justify-center">

      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-64 w-64 rounded-full bg-cyan-300/25 blur-3xl"
      />

      {/* Inner Dashed Ring */}
<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 30,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute h-72 w-72 rounded-full border border-dashed border-cyan-400/60"
/>

      {/* Outer Ring */}
<motion.div
  animate={{ rotate: -360 }}
  transition={{
    duration: 45,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute h-96 w-96 rounded-full border border-cyan-300/60"
/>

    {/* Orbit Dots */}
<motion.div
  animate={{ rotate: 360 }}
  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "linear",
  }}
  className="absolute h-96 w-96"
>
  {[...Array(6)].map((_, index) => {
    const angle = (360 / 6) * index;

    return (
      <span
        key={index}
        className="absolute h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
        style={{
          left: "50%",
          top: "50%",
          transform: `
            rotate(${angle}deg)
            translateY(-190px)
            translate(-50%, -50%)
          `,
        }}
      />
    );
  })}
</motion.div>

      {/* Center Orb */}
<motion.div
  animate={{
    y: [0, -8, 0],
    scale: [1, 1.03, 1],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="
    relative
    flex
    h-36
    w-36
    items-center
    justify-center
    overflow-hidden
    rounded-full
    border
    border-white/70
    bg-white/80
    shadow-2xl
    backdrop-blur-xl
  "
>
  {/* Soft Cyan Center Glow */}
  <div
    aria-hidden="true"
    className="
      pointer-events-none
      absolute
      inset-5
      rounded-full
      bg-[#40A8C4]/25
      blur-2xl
    "
  />

  {/* Icon */}
  <motion.div
    animate={{
      rotate: [0, 6, -6, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative z-10"
  >
    <Icon className="h-14 w-14 text-[#235784]" />
  </motion.div>
</motion.div>

    </div>
  );
}