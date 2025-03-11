import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createFileRoute } from "@tanstack/react-router";
import {
  AlertCircle,
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Database,
  Search,
  Upload,
  Users,
  Wallet,
  Moon,
  Sun,
} from "lucide-react";
import React, { useState, useEffect } from "react";

export const Route = createFileRoute("/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <AlgorandDashboard />;
}

// Sample data - in a real application, this would come from Algorand API
const mockData = {
  optInWallets: [
    {
      address: "ALGO7X2KCNQ5OIYRJSP6LDBLTB3HTDLBQFNLQRRJ7JWKRJ4AF4LJMSTHYA",
      assets: 8,
      firstOptIn: "2023-07-12",
      lastActive: "2024-02-20",
      balance: "214.52",
      selected: false,
    },
    {
      address: "ALGOBCDEFGHIJKLMNOPQRSTUVWXYZ1234567890ABCDEFGHIJKLMNOPQ",
      assets: 12,
      firstOptIn: "2023-05-30",
      lastActive: "2024-02-23",
      balance: "1,245.89",
      selected: false,
    },
    {
      address: "ALGO123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890ABCDEFG",
      assets: 5,
      firstOptIn: "2023-09-18",
      lastActive: "2024-02-18",
      balance: "532.21",
      selected: false,
    },
    {
      address: "ALGOXYZABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890ABCDEFGHIJKLM",
      assets: 15,
      firstOptIn: "2023-04-04",
      lastActive: "2024-02-22",
      balance: "3,178.65",
      selected: false,
    },
    {
      address: "ALGO987654321ZYXWVUTSRQPONMLKJIHGFEDCBA1234567890ABCDEF",
      assets: 3,
      firstOptIn: "2023-12-01",
      lastActive: "2024-02-19",
      balance: "98.76",
      selected: false,
    },
    {
      address: "ALGOQWERTYUIOPASDFGHJKLZXCVBNM1234567890QWERTYUIOPASDFG",
      assets: 21,
      firstOptIn: "2023-03-15",
      lastActive: "2024-02-24",
      balance: "5,421.09",
      selected: false,
    },
    {
      address: "ALGOMNBVCXZLKJHGFDSAPOIUYTREWQ1234567890MNBVCXZASDFGHJK",
      assets: 7,
      firstOptIn: "2023-08-22",
      lastActive: "2024-02-21",
      balance: "756.33",
      selected: false,
    },
    {
      address: "ALGO1A2B3C4D5E6F7G8H9I0J1K2L3M4N5O6P7Q8R9S0T1U2V3W4X5Y6Z",
      assets: 10,
      firstOptIn: "2023-06-14",
      lastActive: "2024-02-17",
      balance: "1,902.47",
      selected: false,
    },
  ],
  assets: [
    {
      id: 123456,
      name: "AlgoToken",
      unitName: "ALGT",
      total: "10,000,000",
      frozen: false,
    },
    {
      id: 234567,
      name: "NFT Collection",
      unitName: "ANFT",
      total: "1,000",
      frozen: false,
    },
    {
      id: 345678,
      name: "GameCoin",
      unitName: "GAME",
      total: "5,000,000",
      frozen: false,
    },
    {
      id: 456789,
      name: "StableCoin",
      unitName: "USDA",
      total: "1,000,000",
      frozen: false,
    },
  ],
};

const statItems = [
  {
    title: "Total Opt-Ins",
    value: "4,220",
    change: "+14.7%",
    icon: <Users className="h-8 w-8" />,
  },
  {
    title: "Active ASAs",
    value: "842",
    change: "+5.2%",
    icon: <Database className="h-8 w-8" />,
  },
  {
    title: "Total TXs",
    value: "109.3K",
    change: "+11.2%",
    icon: <ArrowUpRight className="h-8 w-8" />,
  },
  {
    title: "Unique Wallets",
    value: "26.5K",
    change: "+8.9%",
    icon: <Wallet className="h-8 w-8" />,
  },
];

const AlgorandDashboard = () => {
  const [timeRange, setTimeRange] = useState("7d");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [walletsData, setWalletsData] = useState(mockData.optInWallets);
  const [selectAll, setSelectAll] = useState(false);
  const [airdropAsset, setAirdropAsset] = useState(mockData.assets[0].id);
  const [airdropAmount, setAirdropAmount] = useState("10");
  const [airdropStatus, setAirdropStatus] = useState<string | null>(null);
  const [darkMode] = useState(false);
  const itemsPerPage = 5;

  const handleTimeRangeChange = (range: string) => {
    setTimeRange(range);
  };

  // Filter wallets based on search term
  const filteredWallets = walletsData.filter((wallet) =>
    wallet.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentWallets = filteredWallets.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredWallets.length / itemsPerPage);

  // Toggle select all wallets
  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);

    const updatedWallets = walletsData.map((wallet) => ({
      ...wallet,
      selected: newSelectAll,
    }));

    setWalletsData(updatedWallets);
  };

  // Toggle individual wallet selection
  const handleSelectWallet = (address: string) => {
    const updatedWallets = walletsData.map((wallet) =>
      wallet.address === address
        ? { ...wallet, selected: !wallet.selected }
        : wallet
    );

    setWalletsData(updatedWallets);
    setSelectAll(updatedWallets.every((wallet) => wallet.selected));
  };

  // Calculate selected wallets count
  const selectedWalletsCount = walletsData.filter(
    (wallet) => wallet.selected
  ).length;

  // Handle airdrop execution
  const executeAirdrop = () => {
    setAirdropStatus("processing");

    // Simulate API call
    setTimeout(() => {
      setAirdropStatus("success");

      // Reset status after 3 seconds
      setTimeout(() => {
        setAirdropStatus(null);
      }, 3000);
    }, 2000);
  };

  // Apply themes based on dark mode
  const themeClasses = {
    background: darkMode ? "bg-gray-900" : "bg-gray-50",
    card: darkMode ? "bg-gray-800" : "bg-white",
    text: darkMode ? "text-gray-100" : "text-gray-800",
    subText: darkMode ? "text-gray-300" : "text-gray-500",
    border: darkMode ? "border-gray-700" : "border-gray-200",
    buttonActive: "bg-gradient-to-r from-teal-500 to-cyan-500 text-white",
    buttonInactive: darkMode
      ? "bg-gray-700 text-gray-300"
      : "bg-gray-200 text-gray-700",
    tableHeader: darkMode ? "bg-gray-800" : "bg-gray-50",
    tableRowEven: darkMode ? "bg-gray-800" : "bg-white",
    tableRowOdd: darkMode ? "bg-gray-700" : "bg-gray-50",
    input: darkMode
      ? "bg-gray-700 border-gray-600"
      : "bg-white border-gray-300",
    iconContainer: darkMode ? "bg-gray-700" : "bg-gray-100",
    iconColor: "text-gradient-to-r from-teal-500 to-cyan-500",
    hoverState: darkMode ? "hover:bg-gray-700" : "hover:bg-gray-200",
    linkText: "text-teal-500 dark:text-cyan-400",
    alert: darkMode
      ? "bg-yellow-900 border-yellow-800 text-yellow-200"
      : "bg-yellow-50 border-yellow-200 text-yellow-800",
    checkIcon: darkMode
      ? "bg-teal-900 text-teal-300"
      : "bg-teal-100 text-teal-600",
    success: darkMode
      ? "bg-green-900 text-green-200"
      : "bg-green-100 text-green-800",
  };

  return (
    <div className={`p-6  shadow w-full transition-colors duration-200 `}>
      <div className="flex justify-between items-center mb-6">
        <h1 className={`text-2xl font-bold ${themeClasses.text}`}>
          Algorand Analytics Dashboard
        </h1>
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <button
              className={`px-3 py-1 rounded-md text-sm ${timeRange === "24h" ? themeClasses.buttonActive : themeClasses.buttonInactive}`}
              onClick={() => handleTimeRangeChange("24h")}
            >
              24h
            </button>
            <button
              className={`px-3 py-1 rounded-md text-sm ${timeRange === "7d" ? themeClasses.buttonActive : themeClasses.buttonInactive}`}
              onClick={() => handleTimeRangeChange("7d")}
            >
              7d
            </button>
            <button
              className={`px-3 py-1 rounded-md text-sm ${timeRange === "30d" ? themeClasses.buttonActive : themeClasses.buttonInactive}`}
              onClick={() => handleTimeRangeChange("30d")}
            >
              30d
            </button>
            <button
              className={`px-3 py-1 rounded-md text-sm ${timeRange === "all" ? themeClasses.buttonActive : themeClasses.buttonInactive}`}
              onClick={() => handleTimeRangeChange("all")}
            >
              All
            </button>
          </div>
        </div>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {statItems.map((item, index) => (
          <div
            key={index}
            className={`${themeClasses.card} p-4 rounded-lg shadow-sm flex items-center justify-between transition-colors duration-200`}
          >
            <div>
              <p className={themeClasses.subText}>{item.title}</p>
              <p className={`text-xl font-bold ${themeClasses.text}`}>
                {item.value}
              </p>
              <p
                className={`text-xs ${item.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}
              >
                {item.change} since last period
              </p>
            </div>
            <div className={`p-3 rounded-full ${themeClasses.iconContainer}`}>
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-2 rounded-full">
                {React.cloneElement(item.icon, {
                  className: "h-6 w-6 text-white",
                })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Airdrop Section */}
      <div
        className={`${themeClasses.card} p-6 rounded-lg shadow-sm mb-6 transition-colors duration-200`}
      >
        <div className="flex items-center mb-4">
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-2 rounded-full mr-2">
            <Upload className="h-5 w-5 text-white" />
          </div>
          <h2 className={`text-xl font-semibold ${themeClasses.text}`}>
            Conduct Airdrop
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Airdrop Configuration */}
          <div>
            <div className="mb-4">
              <label
                className={`block text-sm font-medium ${themeClasses.subText} mb-1`}
              >
                Select Asset
              </label>
              <Select
                value={airdropAsset.toString()}
                onValueChange={(value) => setAirdropAsset(parseInt(value))}
              >
                <SelectTrigger
                  className={`w-full ${themeClasses.input} ${themeClasses.text}`}
                >
                  <SelectValue placeholder="Select an asset" />
                </SelectTrigger>
                <SelectContent>
                  {mockData.assets.map((asset) => (
                    <SelectItem key={asset.id} value={asset.id.toString()}>
                      {asset.name} ({asset.unitName}) - ID: {asset.id}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mb-4">
              <label
                className={`block text-sm font-medium ${themeClasses.subText} mb-1`}
              >
                Amount per Wallet
              </label>
              <Input
                type="number"
                className={`w-full ${themeClasses.input} ${themeClasses.text}`}
                value={airdropAmount}
                onChange={(e) => setAirdropAmount(e.target.value)}
                min="0"
              />
            </div>

            <div className="mb-4">
              <label
                className={`block text-sm font-medium ${themeClasses.subText} mb-1`}
              >
                Selected Wallets
              </label>
              <div
                className={`p-3 ${darkMode ? "bg-gray-700" : "bg-gray-100"} rounded-md transition-colors duration-200`}
              >
                <p className={`text-lg font-semibold ${themeClasses.text}`}>
                  {selectedWalletsCount} wallets selected
                </p>
                <p className={themeClasses.subText}>
                  Total distribution:{" "}
                  {(
                    parseFloat(airdropAmount) * selectedWalletsCount
                  ).toLocaleString()}{" "}
                  tokens
                </p>
              </div>
            </div>

            <Button
              className={`w-full mt-4 transition-colors duration-200
                ${
                  selectedWalletsCount > 0
                    ? "bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              disabled={
                selectedWalletsCount === 0 || airdropStatus === "processing"
              }
              onClick={executeAirdrop}
            >
              {airdropStatus === "processing" ? (
                <>Processing Airdrop...</>
              ) : airdropStatus === "success" ? (
                <>
                  <Check className="mr-2" /> Airdrop Successful!
                </>
              ) : (
                <>Execute Airdrop</>
              )}
            </Button>

            {airdropStatus === "success" && (
              <div
                className={`mt-3 ${themeClasses.success} transition-colors duration-200`}
              >
                <Check className="h-5 w-5 mr-2" />
                <span>
                  Airdrop successfully sent to {selectedWalletsCount} wallets!
                </span>
              </div>
            )}
          </div>

          {/* Airdrop Info */}
          <div
            className={`${darkMode ? "bg-gray-700" : "bg-gray-50"} p-4 rounded-md transition-colors duration-200`}
          >
            <h3 className={`text-lg font-medium mb-3 ${themeClasses.text}`}>
              Airdrop Information
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span
                  className={`${themeClasses.checkIcon} p-1 rounded-full mr-2 transition-colors duration-200`}
                >
                  <Check className="h-4 w-4" />
                </span>
                <span className={themeClasses.text}>
                  Selected wallets must have opted-in to the asset
                </span>
              </li>
              <li className="flex items-start">
                <span
                  className={`${themeClasses.checkIcon} p-1 rounded-full mr-2 transition-colors duration-200`}
                >
                  <Check className="h-4 w-4" />
                </span>
                <span className={themeClasses.text}>
                  Airdrops are processed in batches of 100 transactions
                </span>
              </li>
              <li className="flex items-start">
                <span
                  className={`${themeClasses.checkIcon} p-1 rounded-full mr-2 transition-colors duration-200`}
                >
                  <Check className="h-4 w-4" />
                </span>
                <span className={themeClasses.text}>
                  Transaction fees apply (0.001 ALGO per transaction)
                </span>
              </li>
              <li className="flex items-start">
                <span
                  className={`${themeClasses.checkIcon} p-1 rounded-full mr-2 transition-colors duration-200`}
                >
                  <AlertCircle className="h-4 w-4" />
                </span>
                <span className={themeClasses.text}>
                  Make sure you have enough balance to cover the airdrop amount
                  plus transaction fees
                </span>
              </li>
            </ul>
            <div
              className={`mt-4 p-3 ${themeClasses.alert} border rounded-md transition-colors duration-200`}
            >
              <p className="text-sm">
                <strong>Note:</strong> Once an airdrop is started, it cannot be
                canceled. Please verify all details before proceeding.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Opt-In Wallets Table */}
      <div
        className={`${themeClasses.card} p-4 rounded-lg shadow-sm transition-colors duration-200`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className={`text-lg font-semibold ${themeClasses.text}`}>
            Opt-In Wallets
          </h2>
          <div className="relative">
            <Search
              className={`h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 ${themeClasses.subText}`}
            />
            <Input
              type="text"
              placeholder="Search wallet address..."
              className={`pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 ${themeClasses.input} ${themeClasses.text}`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className={themeClasses.tableHeader}>
              <tr>
                <th scope="col" className="px-4 py-3 text-left">
                  <div className="flex items-center">
                    <Checkbox
                      checked={selectAll}
                      onCheckedChange={handleSelectAll}
                    />
                  </div>
                </th>
                <th
                  scope="col"
                  className={`px-6 py-3 text-left text-xs font-medium ${themeClasses.subText} uppercase tracking-wider`}
                >
                  Wallet Address
                </th>
                <th
                  scope="col"
                  className={`px-6 py-3 text-left text-xs font-medium ${themeClasses.subText} uppercase tracking-wider`}
                >
                  Opted-In Assets
                </th>
                <th
                  scope="col"
                  className={`px-6 py-3 text-left text-xs font-medium ${themeClasses.subText} uppercase tracking-wider`}
                >
                  First Opt-In
                </th>
                <th
                  scope="col"
                  className={`px-6 py-3 text-left text-xs font-medium ${themeClasses.subText} uppercase tracking-wider`}
                >
                  Last Active
                </th>
                <th
                  scope="col"
                  className={`px-6 py-3 text-left text-xs font-medium ${themeClasses.subText} uppercase tracking-wider`}
                >
                  ALGO Balance
                </th>
              </tr>
            </thead>
            <tbody
              className={`${themeClasses.card} divide-y ${themeClasses.border}`}
            >
              {currentWallets.map((wallet, index) => {
                const walletInData = walletsData.find(
                  (w) => w.address === wallet.address
                );
                const isSelected = walletInData ? walletInData.selected : false;

                return (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? themeClasses.tableRowEven
                        : themeClasses.tableRowOdd
                    }
                  >
                    <td className="px-4 py-4 whitespace-nowrap">
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={() =>
                          handleSelectWallet(wallet.address)
                        }
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-teal-500 dark:text-cyan-400">
                      {wallet.address.substring(0, 10)}...
                      {wallet.address.substring(wallet.address.length - 4)}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm ${themeClasses.text}`}
                    >
                      {wallet.assets}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm ${themeClasses.text}`}
                    >
                      {wallet.firstOptIn}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm ${themeClasses.text}`}
                    >
                      {wallet.lastActive}
                    </td>
                    <td
                      className={`px-6 py-4 whitespace-nowrap text-sm ${themeClasses.text}`}
                    >
                      {wallet.balance} ALGO
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination controls */}
        <div className="flex items-center justify-between mt-4">
          <div className={`text-sm ${themeClasses.subText}`}>
            Showing <span className="font-medium">{indexOfFirstItem + 1}</span>{" "}
            to{" "}
            <span className="font-medium">
              {Math.min(indexOfLastItem, filteredWallets.length)}
            </span>{" "}
            of <span className="font-medium">{filteredWallets.length}</span>{" "}
            wallets
          </div>
          <div className="flex space-x-2">
            <Button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`transition-colors duration-200 ${
                currentPage === 1
                  ? `${themeClasses.subText} cursor-not-allowed`
                  : `${themeClasses.text} ${themeClasses.hoverState}`
              }`}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className={`transition-colors duration-200 ${
                currentPage === totalPages
                  ? `${themeClasses.subText} cursor-not-allowed`
                  : `${themeClasses.text} ${themeClasses.hoverState}`
              }`}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgorandDashboard;
