import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import WorkflowNode from "./WorkflowNode";
import { motion } from "framer-motion";
import { Code2, Database, Workflow, Play, Copy, Rocket } from "lucide-react";

interface Node {
  id: string;
  title: string;
  description: string;
  position: { x: number; y: number };
  icon: React.ReactNode;
}

interface InteractiveDemoProps {
  nodes?: Node[];
  onNodeConnect?: (sourceId: string, targetId: string) => void;
}

const InteractiveDemo = ({
  nodes = [
    {
      id: "1",
      title: "Visual Editor",
      description: "Design your contract visually",
      position: { x: 100, y: 50 },
      icon: <Workflow className="w-5 h-5 text-primary" />,
    },
    {
      id: "2",
      title: "State Management",
      description: "Define contract state",
      position: { x: 400, y: 50 },
      icon: <Database className="w-5 h-5 text-primary" />,
    },
    {
      id: "3",
      title: "Generate Code",
      description: "Convert to Tealish",
      position: { x: 250, y: 200 },
      icon: <Code2 className="w-5 h-5 text-primary" />,
    },
    {
      id: "4",
      title: "Test Contract",
      description: "Run automated tests",
      position: { x: 100, y: 350 },
      icon: <Play className="w-5 h-5 text-primary" />,
    },
    {
      id: "5",
      title: "Copy Code",
      description: "Get the Tealish code",
      position: { x: 400, y: 350 },
      icon: <Copy className="w-5 h-5 text-primary" />,
    },
    {
      id: "6",
      title: "Deploy",
      description: "Deploy to Algorand",
      position: { x: 250, y: 500 },
      icon: <Rocket className="w-5 h-5 text-primary" />,
    },
  ],
  onNodeConnect = () => {},
}: InteractiveDemoProps) => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [showCode, setShowCode] = useState(false);

  const lines = [
    { start: { x: 200, y: 100 }, end: { x: 400, y: 100 } },
    { start: { x: 300, y: 100 }, end: { x: 300, y: 200 } },
    { start: { x: 250, y: 250 }, end: { x: 150, y: 350 } },
    { start: { x: 350, y: 250 }, end: { x: 400, y: 350 } },
    { start: { x: 250, y: 400 }, end: { x: 250, y: 500 } },
  ];

  const sampleCode = `#pragma version 8

// Contract state
int 0  // Initial balance
store 0

// Main contract logic
txn TypeEnum
int pay
==
bnz handle_payment

// Default: Reject
b reject

handle_payment:
  // Payment handling logic
  txn Amount
  load 0
  +
  store 0
  int 1
  return

reject:
  int 0
  return`;

  return (
    <Card className="relative w-full h-[800px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Connection Lines */}
      <svg className="absolute w-full h-full pointer-events-none">
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3.5, 0 7"
              fill="currentColor"
              className="text-primary/50"
            />
          </marker>
        </defs>
        {lines.map((line, index) => (
          <motion.line
            key={index}
            x1={line.start.x}
            y1={line.start.y}
            x2={line.end.x}
            y2={line.end.y}
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary/50"
            markerEnd="url(#arrowhead)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: index * 0.5 }}
          />
        ))}
      </svg>

      {/* Workflow Nodes */}
      {nodes.map((node) => (
        <WorkflowNode
          key={node.id}
          title={node.title}
          description={node.description}
          icon={node.icon}
          position={node.position}
          isSelected={selectedNode === node.id}
          onClick={() => {
            setSelectedNode(node.id);
            if (node.id === "5") setShowCode(true);
          }}
          onDragEnd={(_, info) => {
            console.log("Node dragged:", node.id, info);
          }}
        />
      ))}

      {/* Code Preview */}
      {showCode && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute right-8 top-8 w-[400px] bg-background/95 backdrop-blur p-6 rounded-lg border shadow-lg"
        >
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-medium">Generated Tealish Code</h4>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowCode(false)}
            >
              ×
            </Button>
          </div>
          <pre className="text-sm bg-muted/50 p-4 rounded overflow-auto max-h-[400px]">
            <code>{sampleCode}</code>
          </pre>
          <div className="mt-6 flex gap-3">
            <Button
              size="sm"
              variant="outline"
              className="flex-1"
              onClick={() => navigator.clipboard.writeText(sampleCode)}
            >
              <Copy className="w-4 h-4 mr-2" />
              Copy Code
            </Button>
            <Button size="sm" className="flex-1">
              <Rocket className="w-4 h-4 mr-2" />
              Deploy
            </Button>
          </div>
        </motion.div>
      )}

      {/* Instructions Overlay */}
      <div className="absolute bottom-4 left-4 right-4 p-4 bg-background/80 backdrop-blur rounded-lg border">
        <p className="text-sm text-muted-foreground text-center">
          Click on nodes to explore each step. Try clicking "Copy Code" to see
          the Tealish output!
        </p>
      </div>
    </Card>
  );
};

export default InteractiveDemo;
