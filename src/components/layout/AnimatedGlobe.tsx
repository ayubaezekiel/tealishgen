import { motion } from "framer-motion";
import { Bitcoin, Code2, FileCode2, Wallet, Coins, Binary } from "lucide-react";

const AnimatedGlobe = () => {
  const icons = [
    { Icon: Bitcoin, delay: 0 },
    { Icon: Code2, delay: 1 },
    { Icon: FileCode2, delay: 2 },
    { Icon: Wallet, delay: 3 },
    { Icon: Coins, delay: 4 },
    { Icon: Binary, delay: 5 },
  ];

  // Generate random stars
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 2 + 1,
  }));

  return (
    <div className="relative w-[600px] h-[600px] mx-auto">
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

      {/* Orbiting Icons */}
      {icons.map(({ Icon, delay }, index) => {
        const angle = (index * 360) / icons.length;
        return (
          <motion.div
            key={index}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay,
            }}
            style={{
              transformOrigin: "50% 50%",
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon
                className="w-12 h-12 text-primary absolute -left-6 -top-72 drop-shadow-[0_0_10px_rgba(0,174,209,0.5)]"
                strokeWidth={1.5}
              />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AnimatedGlobe;
