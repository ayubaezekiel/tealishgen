import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface RoadmapItem {
  quarter: string;
  title: string;
  description: string;
  status: "completed" | "in-progress" | "planned";
  items: string[];
}

const roadmapData: RoadmapItem[] = [
  {
    quarter: "Q1 2024",
    title: "Foundation",
    description: "Establishing core platform functionality",
    status: "completed",
    items: [
      "Visual Contract Builder MVP",
      "Basic Tealish Integration",
      "Community Building",
    ],
  },
  {
    quarter: "Q2 2024",
    title: "Enhanced Features",
    description: "Expanding platform capabilities",
    status: "in-progress",
    items: ["Advanced Node System", "Template Library", "Testing Framework"],
  },
  {
    quarter: "Q3 2024",
    title: "Ecosystem Growth",
    description: "Building the ecosystem",
    status: "planned",
    items: ["Marketplace Launch", "Developer SDK", "Partnership Program"],
  },
  {
    quarter: "Q4 2024",
    title: "Enterprise Solutions",
    description: "Scaling for enterprise",
    status: "planned",
    items: [
      "Enterprise Dashboard",
      "Advanced Security Features",
      "Custom Integration API",
    ],
  },
];

const statusColors = {
  completed: "bg-green-500",
  "in-progress": "bg-blue-500",
  planned: "bg-gray-500",
};

const RoadmapPage = () => {
  return (
    <div className="min-h-screen bg-background pt-16">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Product Roadmap
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our journey to revolutionize smart contract development on Algorand
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapData.map((item, index) => (
            <motion.div
              key={item.quarter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-card hover:bg-accent/5">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-muted-foreground">
                      {item.quarter}
                    </span>
                    <Badge
                      variant="secondary"
                      className={`${statusColors[item.status]} text-white`}
                    >
                      {item.status}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <ul className="space-y-2 mt-auto">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">
                          {listItem}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
