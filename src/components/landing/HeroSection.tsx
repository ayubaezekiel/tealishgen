import { motion } from "framer-motion";
import AnimatedGlobe from "../layout/AnimatedGlobe";
import { Share2 } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  title = "Build Smart Contracts Visually",
  subtitle = "Drag-and-drop smart contract generator for Algorand blockchain. Simplify Tealish development through an intuitive visual interface.",
  ctaText = "Get Started",
  onCtaClick,
}: HeroSectionProps) => {
  return (
    <section className="min-h-[800px] w-full bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#00aed1_12%,transparent_12.5%,transparent_87.5%,#00aed1_87.5%,#00aed1),linear-gradient(150deg,#00aed1_12%,transparent_12.5%,transparent_87.5%,#00aed1_87.5%,#00aed1),linear-gradient(30deg,#00aed1_12%,transparent_12.5%,transparent_87.5%,#00aed1_87.5%,#00aed1),linear-gradient(150deg,#00aed1_12%,transparent_12.5%,transparent_87.5%,#00aed1_87.5%,#00aed1),linear-gradient(60deg,#00aed177_25%,transparent_25.5%,transparent_75%,#00aed177_75%,#00aed177)] bg-[length:80px_140px]" />
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 z-10 py-12 lg:py-0">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl">
            {subtitle}
          </p>

          {/* Airdrop Content Highlight */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 rounded-xl p-4 mb-8 max-w-2xl">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <Share2
                  size={20}
                  className="text-blue-600 dark:text-blue-400"
                />
              </div>
              <div>
                <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">
                  Airdrop Launcher
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base">
                  Easily distribute tokens to multiple wallet addresses in one
                  transaction. Import from CSV, set custom allocations, and
                  schedule airdrops for token launches, community rewards, and
                  investor distributions.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              onClick={onCtaClick}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full flex items-center gap-2 justify-center shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {ctaText}
            </motion.button>

            <motion.button
              onClick={onCtaClick}
              className="bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 font-medium px-8 py-3 rounded-full flex items-center gap-2 justify-center shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Share2 size={20} />
              Try Airdrop Launcher
            </motion.button>
          </div>
        </motion.div>

        {/* Animated Illustration */}
        <motion.div
          className="flex-1 mt-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-[600px] aspect-square mx-auto">
            <AnimatedGlobe />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
