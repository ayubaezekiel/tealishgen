import { Card } from "@/components/ui/card";
import { Code2, Database, Workflow, Play, Copy, Rocket } from "lucide-react";

const WorkflowDiagram = () => {
  return (
    <Card className="w-full p-8 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: <Workflow className="w-6 h-6 text-primary" />,
            title: "Visual Editor",
            description: "Design your contract visually",
          },
          {
            icon: <Database className="w-6 h-6 text-primary" />,
            title: "State Management",
            description: "Define contract state",
          },
          {
            icon: <Code2 className="w-6 h-6 text-primary" />,
            title: "Generate Code",
            description: "Convert to Tealish",
          },
          {
            icon: <Play className="w-6 h-6 text-primary" />,
            title: "Test Contract",
            description: "Run automated tests",
          },
          {
            icon: <Copy className="w-6 h-6 text-primary" />,
            title: "Copy Code",
            description: "Get the Tealish code",
          },
          {
            icon: <Rocket className="w-6 h-6 text-primary" />,
            title: "Deploy",
            description: "Deploy to Algorand",
          },
        ].map((step, i) => (
          <Card
            key={i}
            className="p-6 flex flex-col items-center text-center gap-4 bg-card hover:bg-accent/5 border border-border relative"
          >
            <div className="p-3 rounded-full bg-primary/10">{step.icon}</div>
            <div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">
                {step.description}
              </p>
            </div>
            {/* Horizontal connector on desktop */}
            {i < 5 && i % 3 !== 2 && (
              <div className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-primary/30" />
            )}
            {/* Vertical connector on mobile */}
            {i < 5 && (
              <div className="block md:hidden absolute left-1/2 -bottom-8 w-[2px] h-8 bg-primary/30" />
            )}
          </Card>
        ))}
      </div>
    </Card>
  );
};

export default WorkflowDiagram;
