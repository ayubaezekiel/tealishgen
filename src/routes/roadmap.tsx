import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Lock, Code, Zap, Globe, ShieldCheck, Bot } from "lucide-react";

export const Route = createFileRoute("/roadmap")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Roadmap />;
}

interface RoadmapItem {
  phase: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "upcoming" | "future";
  items: string[];
  icon: React.ReactNode;
  color: string;
}

const roadmapData: RoadmapItem[] = [
  {
    phase: "Phase 1",
    title: "Airdrop Launcher",
    description:
      "Establishing core platform functionality for airdrop management",
    status: "completed",
    color: "from-green-500 to-emerald-600",
    icon: <Lock size={24} />,
    items: [
      "CSV Upload & Validation",
      "Airdrop Contract Deployment",
      "Token Distribution",
      "User Interface Enhancements",
    ],
  },
  {
    phase: "Phase 2",
    title: "Enhanced Features",
    description: "Expanding platform capabilities",
    status: "in-progress",
    color: "from-blue-500 to-indigo-600",
    icon: <Code size={24} />,
    items: ["Advanced Node System", "Template Library", "Testing Framework"],
  },
  {
    phase: "Phase 3",
    title: "AI Code Generation",
    description: "Intelligent contract creation powered by community knowledge",
    status: "upcoming",
    color: "from-purple-500 to-pink-600",
    icon: <Bot size={24} />,
    items: [
      "Smart Contract AI Assistant",
      "Community-trained AI Models",
      "Secure Code Generation",
      "Natural Language to Teal Conversion",
    ],
  },
  {
    phase: "Phase 4",
    title: "Foundation",
    description: "Establishing core platform functionality",
    status: "upcoming",
    color: "from-green-500 to-emerald-600",
    icon: <Lock size={24} />,
    items: [
      "Visual Contract Builder MVP",
      "Basic Tealish Integration",
      "Community Building",
    ],
  },
  {
    phase: "Phase 5",
    title: "Ecosystem Growth",
    description: "Building the ecosystem",
    status: "future",
    color: "from-amber-500 to-orange-600",
    icon: <Globe size={24} />,
    items: ["Marketplace Launch", "Developer SDK", "Partnership Program"],
  },
  {
    phase: "Phase 6",
    title: "Enterprise Solutions",
    description: "Scaling for enterprise",
    status: "future",
    color: "from-slate-500 to-slate-700",
    icon: <ShieldCheck size={24} />,
    items: [
      "Enterprise Dashboard",
      "Advanced Security Features",
      "Custom Integration API",
    ],
  },
];

const statusConfig = {
  completed: {
    label: "Completed",
    color: "bg-green-500",
  },
  "in-progress": {
    label: "In Progress",
    color: "bg-blue-500",
  },
  upcoming: {
    label: "Coming Soon",
    color: "bg-purple-500",
  },
  future: {
    label: "Future",
    color: "bg-gray-500",
  },
};

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Background gradient elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text text-lg font-medium mb-4">
            Future Vision
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Product Roadmap
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of innovation to revolutionize smart contract development
            on Algorand
          </p>
        </motion.div>

        {/* Connected Timeline View */}
        <div className="relative pb-16">
          {/* Timeline connector */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-gray-500 rounded-full hidden lg:block"></div>

          {roadmapData.map((item, index) => (
            <motion.div
              key={item.phase}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="mb-16 lg:mb-24 relative"
            >
              <div
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center`}
              >
                {/* Phase marker */}
                <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg`}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"}`}
                >
                  <Card className="p-6 border border-gray-200 dark:border-gray-800 bg-card hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden relative">
                    {/* Top gradient bar */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}
                    ></div>

                    <div className="flex lg:hidden items-center mb-4 gap-3">
                      <div
                        className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}
                      >
                        {item.icon}
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm font-semibold text-foreground">
                          {item.phase}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="hidden lg:block text-sm font-semibold text-foreground">
                        {item.phase}
                      </span>
                      <Badge
                        variant="secondary"
                        className={`${statusConfig[item.status].color} text-white px-3 py-1`}
                      >
                        {statusConfig[item.status].label}
                      </Badge>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {item.description}
                    </p>

                    <ul className="space-y-3">
                      {item.items.map((listItem, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div
                            className={`w-5 h-5 rounded-full bg-gradient-to-br ${item.color} flex-shrink-0 flex items-center justify-center text-white mt-0.5`}
                          >
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          </div>
                          <span className="text-foreground">{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Training Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-24 mb-16 bg-gradient-to-r from-purple-900/10 to-blue-900/10 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="relative w-48 h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <Bot size={64} className="text-white" />
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">
                Community-Powered AI Code Generation
              </h2>
              <p className="text-lg mb-6">
                Our AI code generator will be trained using trusted smart
                contracts contributed by our community. This collaborative
                approach ensures high-quality, secure code generation while
                leveraging the collective expertise of Algorand developers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck size={18} className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Secure & Verified</h4>
                    <p className="text-sm text-muted-foreground">
                      Only curated, audited contracts are used for training
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Zap size={18} className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Rapid Development</h4>
                    <p className="text-sm text-muted-foreground">
                      Accelerate development with AI-generated code
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Globe size={18} className="text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Community-Driven</h4>
                    <p className="text-sm text-muted-foreground">
                      Built on the expertise of the entire ecosystem
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <Code size={18} className="text-amber-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Best Practices</h4>
                    <p className="text-sm text-muted-foreground">
                      Follows proven patterns and security standards
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
