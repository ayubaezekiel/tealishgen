import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Cpu, Rocket } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({
  title = "Feature Title",
  description = "Feature description goes here",
  icon = <Code2 className="w-8 h-8" />,
}: FeatureCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="p-6 h-full bg-card hover:bg-accent/5 cursor-pointer border border-border">
        <div className="flex flex-col gap-4">
          <div className="p-2 w-fit rounded-lg bg-primary/10">{icon}</div>
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
};

interface FeaturesGridProps {
  features?: FeatureCardProps[];
}

const FeaturesGrid = ({ features }: FeaturesGridProps) => {
  const defaultFeatures = [
    {
      title: "Visual Programming",
      description:
        "Build smart contracts visually using our intuitive drag-and-drop interface, making blockchain development accessible to everyone.",
      icon: <Code2 className="w-8 h-8 text-primary" />,
    },
    {
      title: "Tealish Integration",
      description:
        "Seamlessly convert visual workflows into optimized Tealish code, maintaining full compatibility with the Algorand ecosystem.",
      icon: <Cpu className="w-8 h-8 text-primary" />,
    },
    {
      title: "One-Click Deployment",
      description:
        "Deploy your smart contracts directly to the Algorand blockchain with automated testing and verification.",
      icon: <Rocket className="w-8 h-8 text-primary" />,
    },
  ];

  const displayFeatures = features || defaultFeatures;

  return (
    <section className="w-full py-12 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build and deploy smart contracts on Algorand
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
