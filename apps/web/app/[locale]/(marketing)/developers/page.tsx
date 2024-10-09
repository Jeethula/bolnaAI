"use client";

import { useState } from "react";
import { Button } from "../../../../modules/ui/components/button";
import { Input } from "../../../../modules/ui/components/input";
import {
  Search,
  SlidersHorizontal,
  Grid2X2,
  FileText,
  Eye,
  EyeOff,
  Trash2,
  Copy,
  Check,
} from "lucide-react";
import { useToast } from "@ui/hooks/use-toast";

const apiKeyData = [
  {
    id: "bn-1234567890abcdef1290abcdef1234",
    lastAccessed: "21 hours ago",
    status: "Active",
    visible: true,
  },
  {
    id: "bn-1234567890abcdef1290abcdef1234",
    lastAccessed: "23 hours ago",
    status: "Active",
    visible: true,
  },
  {
    id: "bn-1234567890abcdef1290abcdef1234",
    lastAccessed: "23 hours ago",
    status: "Active",
    visible: false,
  },
  {
    id: "bn-1234567890abcdef1290abcdef1234",
    lastAccessed: "23 hours ago",
    status: "Expired",
    visible: false,
  },
];

export default function DevelopersAPIKeys() {


  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleKeys, setVisibleKeys] = useState<{ [key: string]: boolean }>(
    {}
  );
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const toast = useToast();

  const filteredData = apiKeyData.filter(
    (item) =>
      (filter === "All" ||
        (filter === "Active" && item.status === "Active") ||
        (filter === "Expired" && item.status === "Expired")) &&
      item.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleKeyVisibility = (id: string) => {
    setVisibleKeys((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const copyToClipboard = (id: string) => {
    navigator.clipboard.writeText(id).then(() => {
      setCopiedKey(id);
      toast.toast({
        title: "API Key Copied",
        description: "The API key has been copied to your clipboard.",
      });
      setTimeout(() => setCopiedKey(null), 2000);
    });
  };

  const maskKey = (key: string) => {
    return (
      key.substring(0, 7) +
      "*".repeat(key.length - 11) +
      key.substring(key.length - 4)
    );
  };

  return (
    <div className="min-h-screen p-8 flex flex-col">
                <h1 className="text-2xl font-semibold text-gray-800 mb-1">
              Developers
            </h1>
            <p className="text-gray-600 mb-6">
              These keys can be used to read and write data to Bolna. Please do
              not share these keys and make sure you store them somewhere
              secure.
            </p>
      <div className="flex-grow ">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
          <div className="p-6">
    

            <div className="sticky top-0 bg-white z-10 pb-4">
              <div className="flex justify-between items-center mb-6">
                <div className="relative flex-grow mr-4">
                  <Input
                    type="text"
                    placeholder="Search for language, voice, accent, or provider"
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                </div>
                <Button className="bg-[#5BA893] hover:bg-[#4A8B78] text-white rounded-full px-6">
                  Create a new API key
                </Button>
              </div>

              <div className="flex justify-between items-center mb-6">
                <div className="flex space-x-2">
                  <Button
                    variant={filter === "All" ? "default" : "outline"}
                    onClick={() => setFilter("All")}
                    className={`rounded-full px-6 ${
                      filter === "All"
                        ? "bg-gray-200 text-gray-800"
                        : "text-gray-600"
                    }`}
                  >
                    All
                  </Button>
                  <Button
                    variant={filter === "Active" ? "default" : "outline"}
                    onClick={() => setFilter("Active")}
                    className={`rounded-full px-6 ${
                      filter === "Active"
                        ? "bg-gray-200 text-gray-800"
                        : "text-gray-600"
                    }`}
                  >
                    Active
                  </Button>
                  <Button
                    variant={filter === "Expired" ? "default" : "outline"}
                    onClick={() => setFilter("Expired")}
                    className={`rounded-full px-6 ${
                      filter === "Expired"
                        ? "bg-gray-200 text-gray-800"
                        : "text-gray-600"
                    }`}
                  >
                    Expired
                  </Button>
                </div>
                <div className="flex space-x-4">
                  <Button variant="ghost" className="text-gray-600">
                    <SlidersHorizontal size={20} className="mr-2" />
                    Filter
                  </Button>
                  <Button variant="ghost" className="text-gray-600">
                    <Grid2X2 size={20} className="mr-2" />
                    Group by
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-grow overflow-auto">
            <table className="w-full">
              <thead className="bg-gray-100 sticky top-0">
                <tr>
                  <th className="text-left p-4 font-medium text-gray-700">
                    Key Identifier
                  </th>
                  <th className="text-left p-4 font-medium text-gray-700">
                    Last Accessed
                  </th>
                  <th className="text-left p-4 font-medium text-gray-700">
                    Status
                  </th>
                  <th className="text-left p-4 font-medium text-gray-700">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <tr key={index}>
                      <td className="p-4">
                        <div className="flex items-center">
                          <FileText className="mr-2 text-gray-400" size={20} />
                          {visibleKeys[item.id] ? item.id : maskKey(item.id)}
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => toggleKeyVisibility(item.id)}
                            className="ml-2 text-gray-400 hover:text-gray-600"
                          >
                            {visibleKeys[item.id] ? (
                              <EyeOff size={20} />
                            ) : (
                              <Eye size={20} />
                            )}
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => copyToClipboard(item.id)}
                            className="ml-2 text-gray-400 hover:text-gray-600"
                          >
                            {copiedKey === item.id ? (
                              <Check size={20} />
                            ) : (
                              <Copy size={20} />
                            )}
                          </Button>
                        </div>
                      </td>
                      <td className="p-4">{item.lastAccessed}</td>
                      <td className="p-4">
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            item.status === "Active"
                              ? "bg-teal-100 text-teal-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                              item.status === "Active"
                                ? "bg-teal-500"
                                : "bg-red-500"
                            }`}
                          ></div>
                          {item.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-600"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center py-8 text-gray-500">
                      No API keys found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
