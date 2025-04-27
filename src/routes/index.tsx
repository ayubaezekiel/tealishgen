import { createFileRoute } from "@tanstack/react-router";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import HeroSection from "@/components/landing/HeroSection";
import WorkflowDiagram from "@/components/landing/WorkflowDiagram";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Code,
  PlusCircle,
  Settings,
  Database,
  Send,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Index />;
}

interface HomeProps {
  onGetStarted?: () => void;
}

const Index = ({
  onGetStarted = () => console.log("Get Started clicked"),
}: HomeProps) => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.7,
        ease: "easeInOut",
      },
    }),
  };

  const workflowSteps = [
    {
      title: "Select Template",
      description:
        "Choose from a variety of pre-built smart contract templates designed for different use cases.",
      icon: <PlusCircle size={24} />,
      details: [
        "Browse categories like DeFi, NFT, DAO, and more",
        "Preview code and documentation before selecting",
        "Filter by complexity level and requirements",
      ],
    },
    {
      title: "Customize Parameters",
      description:
        "Tailor your contract parameters to match your specific project requirements.",
      icon: <Settings size={24} />,
      details: [
        "Edit key variables through an intuitive interface",
        "Set permissions, fees, and operational rules",
        "Intelligent validation prevents common mistakes",
      ],
    },
    {
      title: "Simulate & Test",
      description:
        "Run your contract in a sandbox environment to verify it works as intended.",
      icon: <Code size={24} />,
      details: [
        "Execute transactions in a risk-free environment",
        "Automated testing against common edge cases",
        "Detailed logs and performance metrics",
      ],
    },
    {
      title: "Deploy to Blockchain",
      description:
        "Deploy your tested contract directly to the Algorand blockchain in one click.",
      icon: <Database size={24} />,
      details: [
        "Connect your Algorand wallet securely",
        "Preview transaction fees before confirmation",
        "Track deployment progress in real-time",
      ],
    },
    {
      title: "Monitor & Manage",
      description:
        "Track performance and interact with your deployed contract through an intuitive dashboard.",
      icon: <Send size={24} />,
      details: [
        "Real-time activity and transaction monitoring",
        "Easy contract upgrades and parameter adjustments",
        "Export analytics and usage reports",
      ],
    },
  ];

  return (
    <motion.div
      className="w-full bg-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <HeroSection onCtaClick={onGetStarted} />

      {/* Enhanced How It Works Section */}
      <section className="py-16 md:py-32 container mx-auto px-4 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900/30 -z-10"></div>
        <div className="absolute -right-64 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -left-64 bottom-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>

        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Build Smart Contracts{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Without Code
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Our intuitive workflow makes deploying Algorand smart contracts
            simple, fast, and accessible to everyone.
          </p>
        </motion.div>

        {/* Workflow steps */}
        <div className="mt-16 mb-24">
          <div className="relative max-w-5xl mx-auto">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={index}
                className="mb-16 md:mb-24 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeIn}
                custom={index + 1}
              >
                <div
                  className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-16`}
                >
                  {/* Step number and icon */}
                  <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                    <div className="text-white">{step.icon}</div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 text-center md:text-left ${index % 2 !== 0 && "md:text-right"}`}
                  >
                    <div className="bg-white dark:bg-gray-800/50 shadow-lg rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-gray-100 dark:border-gray-700/50">
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground flex items-center gap-2 justify-center md:justify-start">
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-2">
                          {index + 1}
                        </span>
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-4">
                        {step.description}
                      </p>
                      <ul
                        className={`space-y-2 ${index % 2 !== 0 ? "md:ml-auto" : ""}`}
                      >
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle
                              size={18}
                              className="text-green-500 mt-1 flex-shrink-0"
                            />
                            <span className="text-gray-600 dark:text-gray-300">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive diagram */}
        <div className="mt-16">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Visualize Your Workflow
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our interactive diagram helps you understand the complete
              lifecycle of your smart contract
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={1}
            className="bg-white dark:bg-gray-800/80 shadow-xl rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-gray-100 dark:border-gray-700"
          >
            <WorkflowDiagram />
          </motion.div>
        </div>
      </section>

      <FeaturesGrid />
    </motion.div>
  );
};

export default Index;
