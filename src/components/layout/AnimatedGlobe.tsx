import { motion } from "framer-motion";

const AnimatedGlobe = () => {
  
  // Generate random stars
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 2 + 1,
  }));

  return (

    <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px] mx-auto">

      {/* Stars Background */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Globe */}
      <motion.div
        className="absolute inset-0 rounded-full overflow-hidden"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, 
              rgba(0, 174, 209, 0.8) 0%, 
              rgba(0, 174, 209, 0.4) 25%, 
              rgba(0, 174, 209, 0.2) 50%,
              rgba(0, 174, 209, 0.1) 75%
            )
          `,
          boxShadow: `
            0 0 60px rgba(0, 174, 209, 0.3),
            inset 0 0 60px rgba(0, 174, 209, 0.3)
          `,
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Grid Lines */}
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-[1px] bg-white/30 left-0"
              style={{ top: `${(i + 1) * 12.5}%` }}
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-[1px] h-full bg-white/30 top-0"
              style={{ left: `${(i + 1) * 12.5}%` }}
            />
          ))}
        </div>

        {/* Inner Glow */}
        <div className="absolute inset-8 rounded-full bg-[rgba(0,174,209,0.2)] blur-xl" />
      </motion.div>

      {/* Orbiting Ring */}
      <motion.div
        className="absolute inset-[-50px] rounded-full border-2 border-primary/20"
        style={{
          borderRadius: "100%",
          transform: "rotateX(75deg)",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default AnimatedGlobe;
