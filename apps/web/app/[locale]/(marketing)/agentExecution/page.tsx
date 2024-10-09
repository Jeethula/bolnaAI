"use client";

import { useState } from "react";
import { Button } from "../../../../modules/ui/components/button";
import { Input } from "../../../../modules/ui/components/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../modules/ui/components/select";
import { Badge } from "../../../../modules/ui/components/badge";
import { Filter, SortAsc, LayoutGrid } from "lucide-react";
import { ExecutionsTable } from "./ExecutionsTable";
import { Pagination } from "./Pagenation";
import { MoreInfoDialog } from "./MoreInfoDialog";
import { TranscriptDialog } from "./TranscriptDialog";
import { ExecutionLogsView } from "./ExecutionLogsView";

// Expanded dummy data for the table
const dummyData = [
  {
    id: "049c6ebc-7919-4936-8dce-1f3ff1f1ae3d",
    type: "Websocket chat",
    duration: 1056.4,
    timestamp: "September 23, 2024, 13:36:53",
    cost: 0.27,
    status: "Completed" as "Completed",
  },
  {
    id: "149c6ebc-7919-4936-8dce-1f3ff1f1ae3e",
    type: "Voice",
    duration: 320.7,
    timestamp: "September 23, 2024, 14:15:30",
    cost: 0.15,
    status: "Completed" as "Completed",
  },
  {
    id: "249c6ebc-7919-4936-8dce-1f3ff1f1ae3f",
    type: "Websocket chat",
    duration: 789.2,
    timestamp: "September 23, 2024, 15:22:10",
    cost: 0.22,
    status: "Failed" as "Failed",
  },
  {
    id: "349c6ebc-7919-4936-8dce-1f3ff1f1ae3g",
    type: "Voice",
    duration: 456.8,
    timestamp: "September 23, 2024, 16:05:45",
    cost: 0.18,
    status: "Completed" as "Completed",
  },
  {
    id: "449c6ebc-7919-4936-8dce-1f3ff1f1ae3h",
    type: "Websocket chat",
    duration: 1234.5,
    timestamp: "September 23, 2024, 17:30:20",
    cost: 0.3,
    status: "Completed" as "Completed",
  },
  {
    id: "549c6ebc-7919-4936-8dce-1f3ff1f1ae3i",
    type: "Voice",
    duration: 678.3,
    timestamp: "September 23, 2024, 18:45:55",
    cost: 0.2,
    status: "Failed" as "Failed",
  },
  {
    id: "649c6ebc-7919-4936-8dce-1f3ff1f1ae3j",
    type: "Websocket chat",
    duration: 987.6,
    timestamp: "September 24, 2024, 09:10:15",
    cost: 0.25,
    status: "Completed" as "Completed",
  },
  {
    id: "749c6ebc-7919-4936-8dce-1f3ff1f1ae3k",
    type: "Voice",
    duration: 543.2,
    timestamp: "September 24, 2024, 10:30:40",
    cost: 0.19,
    status: "Completed" as "Completed",
  },
  {
    id: "849c6ebc-7919-4936-8dce-1f3ff1f1ae3l",
    type: "Websocket chat",
    duration: 876.5,
    timestamp: "September 24, 2024, 11:55:25",
    cost: 0.23,
    status: "Failed" as "Failed",
  },
  {
    id: "949c6ebc-7919-4936-8dce-1f3ff1f1ae3m",
    type: "Voice",
    duration: 765.4,
    timestamp: "September 24, 2024, 13:20:50",
    cost: 0.21,
    status: "Completed" as "Completed",
  },
];

export default function page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExecution, setSelectedExecution] = useState<
    (typeof dummyData)[0] | null
  >(null);
  const [showTranscript, setShowTranscript] = useState(false);
  const [showExecutionLogs, setShowExecutionLogs] = useState(false);

  const itemsPerPage = 6;
  const filteredData = dummyData.filter(
    (item) =>
      (filter === "All" || item.type === filter) &&
      (item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.type.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleMoreClick = (execution: (typeof dummyData)[0]) => {
    setSelectedExecution(execution);
  };

  const handleTranscriptClick = () => {
    setShowTranscript(true);
    setSelectedExecution(null);
  };

  const handleExecutionLogsClick = () => {
    setShowExecutionLogs(true);
    setSelectedExecution(null);
  };

  return (
    <div className="container p-4 max-w-full overflow-x-hidden">
      <h1 className="text-2xl font-bold mb-2">Agent Executions</h1>
      <p className="text-muted-foreground mb-4">
        The table summarizes agent execution activities, showing execution
        status and timing.
      </p>
      <div className="sticky top-0 bg-white z-10 pb-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All</SelectItem>
                <SelectItem value="Websocket chat">Websocket chat</SelectItem>
                <SelectItem value="Voice">Voice</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Batch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="batch1">Batch 1</SelectItem>
                <SelectItem value="batch2">Batch 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64"
            />
            <Button variant="outline" size="icon" className="bg-white ">
              <Filter className="h-4 w-4 text-black" />
            </Button>
            <Button variant="outline" size="icon" className="bg-white hover:bg-gray-100">
              <SortAsc className="h-4 w-4 text-black" />
            </Button>
            <Button variant="outline" size="icon" className="bg-white hover:bg-gray-100">
              <LayoutGrid className="h-4 w-4 text-black" />
            </Button>
          </div>
        </div>

        <div className="flex space-x-2 mb-4">
          <Badge
            className={`${filter === "All" ? "bg-blue-500 text-white" : "bg-white text-blue-500"} hover:bg-blue-500 hover:text-white`}
            onClick={() => setFilter("All")}
          >
            All
          </Badge>
          <Badge
            className={`${filter === "Websocket chat" ? "bg-blue-500 text-white" : "bg-white text-blue-500"} hover:bg-blue-500 hover:text-white`}
            onClick={() => setFilter("Websocket chat")}
          >
            Websocket chat
          </Badge>
          <Badge
            className={`${filter === "Voice" ? "bg-blue-500 text-white" : "bg-white text-blue-500"} hover:bg-blue-500 hover:text-white`}
            onClick={() => setFilter("Voice")}
          >
            Voice
          </Badge>
        </div>
      </div>

      <ExecutionsTable data={paginatedData} onMoreClick={handleMoreClick} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <MoreInfoDialog
        execution={selectedExecution}
        onClose={() => setSelectedExecution(null)}
        onTranscriptClick={handleTranscriptClick}
        onExecutionLogsClick={handleExecutionLogsClick}
      />

      <TranscriptDialog
        open={showTranscript}
        onClose={() => setShowTranscript(false)}
      />

      {showExecutionLogs && (
        <ExecutionLogsView onClose={() => setShowExecutionLogs(false)} />
      )}
    </div>
  );
}