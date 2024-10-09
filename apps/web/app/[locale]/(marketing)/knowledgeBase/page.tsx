"use client"

import { useState } from "react"
import { Button } from "../../../../modules/ui/components/button"
import { Input } from "../../../../modules/ui/components/input"
import { Search, SlidersHorizontal, ArrowUpDown, Grid2X2, FileText, Trash2 } from "lucide-react"

const knowledgeBaseData = [
  { id: "049c6ebc-7919-4936-8dc...", filename: "Walkthrough instructions.pdf", uploaded: "21 hours ago", status: "Processed" },
  { id: "049c6ebc-7919-4936-8dc...", filename: "Updated Information.docs", uploaded: "23 hours ago", status: "Processed" },
  { id: "049c6ebc-7919-4936-8dc...", filename: "Base knowledge.pdf", uploaded: "23 hours ago", status: "Pending" },
]

export default function KnowledgeBase() {
  const [filter, setFilter] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredData = knowledgeBaseData.filter(item => 
    (filter === "All" || item.status === filter) &&
    (item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
     item.filename.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="max-h-screen min-h-screen p-8">
       <h1 className="text-2xl font-semibold text-gray-800 mb-1">Knowledge Base</h1>
       <p className="text-gray-600 mb-6">Manage knowledge base entries and upload PDFs</p>
      <div className="max-w-6xl max-h-fit min-h-screen bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <div className="sticky top-0 bg-white z-10 pb-4">
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
                Upload File
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
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-4 font-medium text-gray-700">RAG ID</th>
                  <th className="text-left p-4 font-medium text-gray-700">Filename</th>
                  <th className="text-left p-4 font-medium text-gray-700">Uploaded</th>
                  <th className="text-left p-4 font-medium text-gray-700">Status</th>
                  <th className="text-left p-4 font-medium text-gray-700">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredData.length > 0 ? (
                  filteredData.map((item, index) => (
                    <tr key={index}>
                      <td className="p-4">
                        <div className="flex items-center">
                          <FileText className="mr-2 text-gray-400" size={20} />
                          {item.id}
                        </div>
                      </td>
                      <td className="p-4">{item.filename}</td>
                      <td className="p-4">{item.uploaded}</td>
                      <td className="p-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          item.status === "Processed" ? "bg-teal-100 text-teal-800" : "bg-red-100 text-red-800"
                        }`}>
                          <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                            item.status === "Processed" ? "bg-teal-500" : "bg-red-500"
                          }`}></div>
                          {item.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <Button variant="ghost" size="icon" className="text-red-600">
                          <Trash2 size={16} />
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center py-8 text-gray-500">No entries found matching your criteria.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}