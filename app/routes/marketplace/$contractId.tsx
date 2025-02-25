import { createFileRoute, useParams } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Copy, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/marketplace/$contractId")({
  component: ContractDetailsPage,
});

interface Contract {
  id: number;
  name: string;
  description: string;
  price: number;
  owner: string;
  address?: string;
  creationDate?: string;
  category?: string;
  downloadCount?: number;
}

function ContractDetailsPage() {
  const { contractId } = useParams({ from: "/marketplace/$contractId" });
  const [contract, setContract] = useState<Contract | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Simulate API fetch for contract details
    const fetchContract = async () => {
      setLoading(true);

      // In a real app, this would be an API call
      // For demo purposes, we'll create mock data
      const mockContract: Contract = {
        id: parseInt(contractId),
        name: `Contract ${contractId}`,
        description: `This is a detailed description for smart contract ${contractId}. This contract provides functionality for secure and automated transactions without intermediaries.`,
        price: Math.floor(Math.random() * 100) + 10,
        owner: `Owner ${Math.floor(Math.random() * 10) + 1}`,
        address: `0x${Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join("")}`,
        creationDate: new Date(Date.now() - Math.random() * 10000000000)
          .toISOString()
          .split("T")[0],
        category: ["DeFi", "NFT", "DAO", "Gaming"][
          Math.floor(Math.random() * 4)
        ],
        downloadCount: Math.floor(Math.random() * 1000),
      };

      // Simulate network delay
      setTimeout(() => {
        setContract(mockContract);
        setLoading(false);
      }, 500);
    };

    fetchContract();
  }, [contractId]);

  const copyAddress = () => {
    if (contract?.address) {
      navigator.clipboard.writeText(contract.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 mt-24 flex justify-center">
        <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!contract) {
    return (
      <div className="container mx-auto px-4 py-12 mt-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Contract Not Found</h1>
        <p className="mb-6">
          The contract you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild>
          <Link to="/marketplace">Back to Marketplace</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 mt-16">
      <div className="mb-6">
        <Button variant="outline" asChild className="flex items-center gap-2">
          <Link to="/marketplace">
            <ArrowLeft size={16} />
            Back to Marketplace
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-3xl mb-2">
                    {contract.name}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Badge variant="outline">{contract.category}</Badge>
                    <span className="text-sm text-gray-500">
                      Created: {contract.creationDate}
                    </span>
                  </CardDescription>
                </div>
                <Badge className="text-lg py-1 px-3">
                  {contract.price} ALGO
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-2">Description</h3>
                <p className="text-gray-700">{contract.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Contract Address</h3>
                <div className="flex items-center gap-2 bg-gray-100 p-3 rounded">
                  <code className="text-sm font-mono flex-1 overflow-x-auto text-black">
                    {contract.address}
                  </code>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={copyAddress}
                    title="Copy to clipboard"
                  >
                    {copied ? "Copied!" : <Copy size={16} />}
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Features</h3>
                <ul className="list-disc pl-5">
                  <li className="mb-1">Secure automated transactions</li>
                  <li className="mb-1">
                    Transparent execution on the blockchain
                  </li>
                  <li className="mb-1">Low gas fees and fast processing</li>
                  <li className="mb-1">Customizable parameters</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Purchase Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Price:</span>
                <span className="font-bold">{contract.price} ALGO</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Creator:</span>
                <span>{contract.owner}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Downloads:</span>
                <span>{contract.downloadCount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">License:</span>
                <span>Open Source</span>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button className="w-full">Purchase Contract</Button>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
              >
                View on Explorer <ExternalLink size={16} />
              </Button>
            </CardFooter>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Need help with this contract? Contact the creator or check the
                documentation.
              </p>
              <Button variant="outline" className="w-full">
                Contact Creator
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
