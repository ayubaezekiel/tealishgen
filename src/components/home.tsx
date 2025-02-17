import React from "react";
import HeroSection from "./landing/HeroSection";
import WorkflowDiagram from "./landing/WorkflowDiagram";
import FeaturesGrid from "./landing/FeaturesGrid";

import { motion } from "framer-motion";

interface HomeProps {
  onGetStarted?: () => void;
}

const Home = ({
  onGetStarted = () => console.log("Get Started clicked"),
}: HomeProps) => {
  return (
    <motion.div
      className="w-full bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <HeroSection onCtaClick={onGetStarted} />

      <section className="py-12 md:py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Simple steps to build and deploy your smart contracts on Algorand
          </p>
        </div>
        <WorkflowDiagram />
      </section>

      <FeaturesGrid />
    </motion.div>
  );
};

export default Home;
