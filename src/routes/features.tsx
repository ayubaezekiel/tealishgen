import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createFileRoute } from "@tanstack/react-router";
import { Zap } from "lucide-react";

export const Route = createFileRoute("/features")({
  component: RouteComponent,
});

function RouteComponent() {
  return <FeaturesPage />;
}

import {
  ArrowRightLeft,
  Blocks,
  Brain,
  Code,
  Cpu,
  ShieldCheck,
  Wand2,
} from "lucide-react";

// Custom drag and drop icon
const DragDropIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M12 11v6" />
    <path d="M9 17h6" />
  </svg>
);

// Custom puzzle icon
const PuzzleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M19 9h-4V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4h4" />
    <path d="M5 19v-4H1v-4a2 2 0 0 1 2-2h4" />
    <path d="M19 5h-4" />
    <path d="M15 19h4a2 2 0 0 0 2-2v-4h-4" />
  </svg>
);

const FeaturesPage = () => {
  const mainFeatures = [
    {
      title: "Drag-and-Drop Builder",
      description:
        "Create complex Algorand smart contracts visually by dragging and connecting components, no coding required.",
      icon: <DragDropIcon className="w-10 h-10 text-teal-500" />,
    },
    {
      title: "Tealish Simplification",
      description:
        "Our platform translates visual elements into optimized Tealish code automatically, making development faster and easier.",
      icon: <Code className="w-10 h-10 text-teal-500" />,
    },
    {
      title: "AI-Powered Generation",
      description:
        "Generate smart contract templates and custom logic using our advanced AI that understands natural language requirements.",
      icon: <Cpu className="w-10 h-10 text-teal-500" />,
    },
    {
      title: "Reusable Components",
      description:
        "Access a library of pre-built, audited components for common DeFi use cases and easily integrate them into your contracts.",
      icon: <PuzzleIcon className="w-10 h-10 text-teal-500" />,
    },
    {
      title: "One-Click Deployment",
      description:
        "Deploy your contracts to Algorand TestNet or MainNet with a single click after automatic security verification.",
      icon: <Zap className="w-10 h-10 text-teal-500" />,
    },
    {
      title: "Smart Suggestions",
      description:
        "Receive real-time code suggestions and optimizations as you build, based on Algorand best practices.",
      icon: <Wand2 className="w-10 h-10 text-teal-500" />,
    },
  ];

  return (
    <div className="pt-24 pb-16 container mx-auto px-4 md:px-6">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-cyan-400 bg-clip-text text-transparent">
          Build on Algorand Without Code
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          TealGen simplifies Algorand smart contract development with an
          intuitive drag-and-drop interface and AI-powered Tealish generation.
        </p>
      </div>

      {/* Visual Demo Section */}
      <div className="mb-16 relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
        <div className="aspect-video bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
          <div className="text-center p-4">
            <img
              src="/api/placeholder/800/450"
              alt="TealGen Interface Demo"
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6 pt-16">
          <Button className="bg-gradient-to-r from-teal-500 to-cyan-400 hover:from-teal-600 hover:to-cyan-500 text-white">
            Watch Demo
          </Button>
        </div>
      </div>

      {/* Main Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {mainFeatures.map((feature, index) => (
          <Card
            key={index}
            className="border border-slate-200 dark:border-slate-800 hover:shadow-md transition-shadow duration-300"
          >
            <CardHeader className="flex flex-row items-center gap-4 pb-2">
              <div className="text-teal-500">{feature.icon}</div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* How It Works Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          How TealGen Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mb-4">
              <Brain className="w-8 h-8 text-teal-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              1. Describe or Design
            </h3>
            <p className="text-muted-foreground">
              Start by describing what you want in plain English or directly
              design using our visual interface.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mb-4">
              <ArrowRightLeft className="w-8 h-8 text-teal-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              2. AI Generates Tealish
            </h3>
            <p className="text-muted-foreground">
              Our AI translates your design into optimized Tealish code, which
              you can review and customize.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mb-4">
              <Blocks className="w-8 h-8 text-teal-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">
              3. Deploy to Algorand
            </h3>
            <p className="text-muted-foreground">
              Test, verify, and deploy your smart contract to the Algorand
              blockchain with one click.
            </p>
          </div>
        </div>
      </div>

      {/* AI Features Section */}
      <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          AI-Powered Development
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-teal-500">
              Natural Language to Tealish
            </h3>
            <p className="mb-4">
              Describe your contract logic in plain English:
            </p>
            <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg mb-4 text-muted-foreground italic">
              "Create a token vesting contract that releases 10% of tokens each
              month for 10 months after a 6-month cliff period."
            </div>
            <p className="text-sm text-muted-foreground">
              Our AI instantly converts this request into functional Tealish
              code.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-teal-500">
              Smart Contract Analysis
            </h3>
            <p className="mb-4">
              Our AI identifies potential issues and suggests improvements:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-500" />
                <span>Security vulnerability detection</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-500" />
                <span>Gas optimization suggestions</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-500" />
                <span>Logic flow verification</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-500" />
                <span>Best practices enforcement</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Build Any Algorand Application
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border border-slate-200 dark:border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">DeFi Protocols</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Lending, borrowing, and liquidity pools with built-in security
                features.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border border-slate-200 dark:border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">NFT Marketplaces</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Create custom NFT minting, trading, and royalty distribution
                contracts.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border border-slate-200 dark:border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">DAO Governance</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Voting systems, treasury management, and proposal execution
                mechanisms.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className="border border-slate-200 dark:border-slate-800">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Token Vesting</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Time-locked distribution contracts with custom vesting
                schedules.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Technical Specs Section */}
      <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-8 mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Technical Specifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-teal-500">
              Algorand Integration
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-500" />
                <span>Supports ARC standards (ARC-3, ARC-19, ARC-69)</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-500" />
                <span>Algorand Standard Assets (ASA) creation</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-500" />
                <span>Smart signatures support</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-500" />
                <span>Atomic transfers</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-teal-500">
              Tealish Compiler
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-500" />
                <span>Latest Tealish syntax support</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-500" />
                <span>Custom libraries and imports</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-500" />
                <span>TEAL v6 compatibility</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-500" />
                <span>Optimized bytecode generation</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 text-teal-500">
              Developer Tools
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-500" />
                <span>Interactive debugger</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-500" />
                <span>Automated testing framework</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-500" />
                <span>Contract monitoring dashboard</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-500" />
                <span>Version control integration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-teal-500 to-cyan-400 rounded-xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Build on Algorand?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Join developers who are creating powerful Algorand applications
          without writing a single line of code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-white text-teal-600 hover:bg-slate-100">
            Start Building Free
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white/10"
          >
            Schedule Demo
          </Button>
        </div>
      </div>
    </div>
  );
};
