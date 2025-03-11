import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState, useMemo, useCallback } from "react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/marketplace/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Marketplace />;
}

interface Contract {
  id: number;
  name: string;
  description: string;
  price: number;
  owner: string;
}

// Move sample data outside component to prevent recreation on each render
const sampleContracts: Contract[] = Array.from({ length: 200 }, (_, index) => ({
  id: index + 1,
  name: `Contract ${index + 1}`,
  description: `Description for contract ${index + 1}`,
  price: Math.floor(Math.random() * 100) + 1,
  owner: `Owner ${index + 1}`,
}));

const Marketplace = () => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [contractsPerPage] = useState(6);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // Simulate fetching contracts from the backend API
    setContracts(sampleContracts);
  }, []);

  // Use useMemo to avoid filtering on every render
  const filteredContracts = useMemo(
    () =>
      contracts.filter((contract) =>
        contract.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [contracts, filter]
  );

  // Reset to first page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  // Calculate pagination values with useMemo
  const { currentContracts, totalPages } = useMemo(() => {
    const indexOfLastContract = currentPage * contractsPerPage;
    const indexOfFirstContract = indexOfLastContract - contractsPerPage;
    return {
      currentContracts: filteredContracts.slice(
        indexOfFirstContract,
        indexOfLastContract
      ),
      totalPages: Math.ceil(filteredContracts.length / contractsPerPage),
    };
  }, [filteredContracts, currentPage, contractsPerPage]);

  const nextPage = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  }, [currentPage, totalPages]);

  const prevPage = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }, [currentPage]);

  const handleFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilter(e.target.value);
    },
    []
  );

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold text-center mb-6">
        Smart Contract Marketplace
      </h1>
      <Input
        type="text"
        placeholder="Filter by name"
        className="mb-6 w-full max-w-md mx-auto"
        value={filter}
        onChange={handleFilterChange}
      />

      {filteredContracts.length === 0 ? (
        <p className="text-center text-lg text-gray-500 my-8">
          No contracts found matching your filter.
        </p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {currentContracts.map((contract) => (
              <div
                key={contract.id}
                className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-bold mb-2">{contract.name}</h2>
                <p className="text-gray-600 mb-3 h-12 overflow-hidden">
                  {contract.description}
                </p>
                <p className="text-lg font-bold mb-3">{contract.price} ALGO</p>
                <Button asChild className="w-full">
                  <Link
                    to="/marketplace/$contractId"
                    params={{ contractId: `${contract.id}` }}
                  >
                    View Details
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center gap-2 mt-6">
            <Button
              onClick={prevPage}
              variant="outline"
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              Previous
            </Button>

            <span className="mx-2 text-sm">
              Page {currentPage} of {totalPages}
            </span>

            <Button
              onClick={nextPage}
              variant="outline"
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Marketplace;
