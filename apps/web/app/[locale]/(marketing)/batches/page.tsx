"use client"

import { useState } from "react"
import { Button } from "../../../../modules/ui/components/button"
import { Input } from "../../../../modules/ui/components/input"
import { Search, SlidersHorizontal, ArrowUpDown, Grid2X2, Play, Download, RotateCcw, Trash2, FileText } from "lucide-react"

const batchData = [
  { id: "049c6ebc-7919-49...", filename: "Affordmed_SECE.csv", uploaded: "11 hours ago", status: "Processed" },
  { id: "049c6ebc-7919-49...", filename: "Affordmed_SECE.csv", uploaded: "12 hours ago", status: "Processed" },
  { id: "049c6ebc-7919-49...", filename: "Affordmed_SECE.csv", uploaded: "20 hours ago", status: "Processed" },
  { id: "049c6ebc-7919-49...", filename: "Affordmed_SECE.csv", uploaded: "23 hours ago", status: "Pending" },
  { id: "049c6ebc-7919-49...", filename: "Affordmed_SECE.csv", uploaded: "11 hours ago", status: "Processed" },
  { id: "049c6ebc-7919-49...", filename: "Affordmed_SECE.csv", uploaded: "11 hours ago", status: "Processed" },
  { id: "049c6ebc-7919-49...", filename: "Affordmed_SECE.csv", uploaded: "11 hours ago", status: "Processed" },
  { id: "049c6ebc-7919-49...", filename: "Affordmed_SECE.csv", uploaded: "11 hours ago", status: "Processed" },
  { id: "049c6ebc-7919-49...", filename: "Affordmed_SECE.csv", uploaded: "11 hours ago", status: "Processed" }, { id: "049c6ebc-7919-49...", filename: "Affordmed_SECE.csv", uploaded: "11 hours ago", status: "Processed" },
  { id: "049c6ebc-7919-49...", filename: "Affordmed_SECE.csv", uploaded: "11 hours ago", status: "Processed" },
  { id: "049c6ebc-7919-49...", filename: "Affordmed_SECE.csv", uploaded: "11 hours ago", status: "Processed" },
  { id: "049c6ebc-7919-49...", filename: "Affordmed_SECE.csv", uploaded: "11 hours ago", status: "Processed" },
  { id: "049c6ebc-7919-49...", filename: "Affordmed_SECE.csv", uploaded: "11 hours ago", status: "Processed" },
  { id: "049c6ebc-7919-49...", filename: "Affordmed_SECE.csv", uploaded: "11 hours ago", status: "Processed" },
  { id: "049c6ebc-7919-49...", filename: "Affordmed_SECE.csv", uploaded: "11 hours ago", status: "Processed" },
  { id: "049c6ebc-7919-49...", filename: "Affordmed_SECE.csv", uploaded: "11 hours ago", status: "Processed" },
  { id: "049c6ebc-7919-49...", filename: "Affordmed_SECE.csv", uploaded: "11 hours ago", status: "Processed" }, { id: "049c6ebc-7919-49...", filename: "Affordmed_SECE.csv", uploaded: "11 hours ago", status: "Processed" },

]

export default function page() {
  const [filter, setFilter] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredBatches = batchData.filter(batch => 
    (filter === "All" || batch.status === filter) &&
    (batch.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
     batch.filename.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-1">Agent Batches</h1>
        <p className="text-gray-600 mb-6">Displays all batches from agents</p>
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="sticky top-0 bg-white z-10">
          <div className="p-6">

            
            <div className="flex justify-between items-center mb-6">
              <div className="relative flex-grow mr-4">
                <Input 
                  type="text" 
                  placeholder="Search" 
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              </div>
              <Button className="bg-[#5BA893] hover:bg-[#4A8B78] text-white rounded-full px-6">
                Upload Batch
              </Button>
            </div>
            
            <div className="flex justify-between items-center mb-6">
              <div className="flex space-x-2">
                <Button 
                  variant={filter === "All" ? "default" : "outline"} 
                  onClick={() => setFilter("All")}
                  className={`rounded-full px-6 ${filter === "All" ? "bg-gray-200 text-gray-800" : "text-gray-600"}`}
                >
                  All
                </Button>
                <Button 
                  variant={filter === "Processed" ? "default" : "outline"} 
                  onClick={() => setFilter("Processed")}
                  className={`rounded-full px-6 ${filter === "Processed" ? "bg-teal-100 text-teal-800" : "text-teal-600"}`}
                >
                  <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
                  Processed
                </Button>
                <Button 
                  variant={filter === "Pending" ? "default" : "outline"} 
                  onClick={() => setFilter("Pending")}
                  className={`rounded-full px-6 ${filter === "Pending" ? "bg-red-100 text-red-800" : "text-red-600"}`}
                >
                  <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                  Pending
                </Button>
              </div>
              <div className="flex space-x-4">
                <Button variant="ghost" className="text-gray-600">
                  <SlidersHorizontal size={20} className="mr-2" />
                  Filter
                </Button>
                <Button variant="ghost" className="text-gray-600">
                  <ArrowUpDown size={20} className="mr-2" />
                  Sort
                </Button>
                <Button variant="ghost" className="text-gray-600">
                  <Grid2X2 size={20} className="mr-2" />
                  Group by
                </Button>
              </div>
            </div>
          </div>
          
          <div className="flex bg-gray-100 p-4 font-medium text-gray-700">
            <div className="w-1/4">Batch ID</div>
            <div className="w-1/4">Filename</div>
            <div className="w-1/4">Uploaded</div>
            <div className="w-1/8">Status</div>
            <div className="w-1/8">Action</div>
          </div>
        </div>
        
        <div className="overflow-y-auto" style={{maxHeight: "calc(100vh - 300px)"}}>
          {filteredBatches.length > 0 ? (
            filteredBatches.map((batch, index) => (
              <div key={index} className="flex items-center p-4 border-b border-gray-200">
                <div className="w-1/4 flex items-center">
                  <FileText className="mr-2 text-gray-400" size={20} />
                  {batch.id}
                </div>
                <div className="w-1/4">{batch.filename}</div>
                <div className="w-1/4">{batch.uploaded}</div>
                <div className="w-1/8">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    batch.status === "Processed" ? "bg-teal-100 text-teal-800" : "bg-red-100 text-red-800"
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                      batch.status === "Processed" ? "bg-teal-500" : "bg-red-500"
                    }`}></div>
                    {batch.status}
                  </span>
                </div>
                <div className="w-1/8 flex space-x-2">
                  <Button variant="ghost" size="icon" className="text-gray-600">
                    <Play size={16} />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-600">
                    <Download size={16} />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-gray-600">
                    <RotateCcw size={16} />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-red-600">
                    <Trash2 size={16} />
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">No batches found matching your criteria.</div>
          )}
        </div>
      </div>
    </div>
  )
}