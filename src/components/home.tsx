import React from "react";
import HeroSection from "./landing/HeroSection";
import InteractiveDemo from "./landing/InteractiveDemo";
import FeaturesGrid from "./landing/FeaturesGrid";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { motion } from "framer-motion";

interface HomeProps {
  onGetStarted?: () => void;
}

const Home = ({
  onGetStarted = () => console.log("Get Started clicked"),
}: HomeProps) => {
  return (
    <motion.div
      className="min-h-screen w-full bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <Header />
      <main className="pt-16">
        <HeroSection onCtaClick={onGetStarted} />

        <section className="py-24 container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              See How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Build smart contracts visually with our intuitive drag-and-drop
              interface
            </p>
          </div>
          <InteractiveDemo />
        </section>

        <FeaturesGrid />
      </main>
      <Footer />
    </motion.div>
  );
};

export default Home;
