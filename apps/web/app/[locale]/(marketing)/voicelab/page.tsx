"use client"

import { useState } from "react"
import { Button } from "../../../../modules/ui/components/button"
import { Input } from "../../../../modules/ui/components/input"
import { Search, SlidersHorizontal, Grid2X2, Play, Edit2, Check, Plus } from "lucide-react"

const voiceData = [
  { name: "John Doe", language: "English", accent: "British", gender: "Male", selected: true },
  { name: "Kevin", language: "English", accent: "Australian", gender: "Male", selected: false },
  { name: "Levik", language: "English", accent: "Canadian", gender: "Male", selected: false },
  { name: "Kevin", language: "English", accent: "US", gender: "Male", selected: true },
  { name: "Kishore", language: "English", accent: "Indian", gender: "Male", selected: false },
  { name: "Kevin", language: "French", accent: "Swiss", gender: "Male", selected: true },
  { name: "John Doe", language: "French", accent: "Belgian", gender: "Male", selected: false },
  { name: "Levik", language: "French", accent: "Parisian", gender: "Male", selected: false },
]

export default function Component() {
  const [filter, setFilter] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredVoices = voiceData.filter(voice => 
    (filter === "All" || voice.gender === filter) &&
    (voice.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     voice.language.toLowerCase().includes(searchTerm.toLowerCase()) ||
     voice.accent.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const groupedVoices: Record<string, typeof voiceData[0][]> = filteredVoices.reduce((acc: Record<string, typeof voiceData[0][]>, voice) => {
    if (!acc[voice.language]) {
      acc[voice.language] = []
    }
    acc[voice.language].push(voice)
    return acc
  }, {})

  return (
    <div className="max-w-5xl mx-auto p-6 h-screen overflow-hidden ">
      <h1 className="text-2xl font-semibold text-gray-800 mb-1">Voice Lab</h1>
      <p className="text-gray-600 mb-3">Explore and test voices</p>
      <div className="bg-white p-6 h-full rounded-lg shadow-md overflow-auto">
        <div className="mb-6 sticky -top-4 z-10 bg-white ">
          <div className="relative">
            <Input 
              type="text" 
              placeholder="Search voice, accent, provider" 
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>

        
        <div className=" bg-white z-10 mb-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-1">
              <Button 
                variant={filter === "All" ? "default" : "outline"} 
                onClick={() => setFilter("All")}
                className={`rounded-lg px-6 ${filter === "All" ? "bg-gray-200 text-gray-800" : "text-gray-600"}`}
              >
                All
              </Button>
              <Button 
                variant={filter === "Male" ? "default" : "outline"} 
                onClick={() => setFilter("Male")}
                className={`rounded-lg px-6 ${filter === "Male" ? "bg-gray-200 text-gray-800" : "text-gray-600"}`}
              >
                Male
              </Button>
              <Button 
                variant={filter === "Female" ? "default" : "outline"} 
                onClick={() => setFilter("Female")}
                className={`rounded-lg px-6 ${filter === "Female" ? "bg-gray-200 text-gray-800" : "text-gray-600"}`}
              >
                Female
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

        <div className="bg-white p-4 rounded-lg shadow-md mb-8 h-full overflow-auto">
          {Object.keys(groupedVoices).length > 0 ? (
            Object.entries(groupedVoices).map(([language, voices]) => (
              <div key={language} className="mb-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">{language}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {voices.map((voice, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-800">{voice.name}</h3>
                          <p className="text-gray-600 text-sm">{voice.language} ({voice.accent})</p>
                        </div>
                        {voice.selected ? (
                          <div className="bg-teal-100 text-teal-600 rounded-full p-1">
                            <Check size={16} />
                          </div>
                        ) : (
                          <div className="border border-gray-300 text-gray-400 rounded-full p-1">
                            <Plus size={16} />
                          </div>
                        )}
                      </div>
                      <p className="text-gray-500 text-sm mb-2">This is the text spoken by the voice</p>
                      <div className="flex items-center justify-between">
                        <Button variant="outline" size="sm" className="text-gray-600">
                          <Edit2 className="h-4 w-4 mr-2" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="text-gray-600 px-6">
                          <Play className="h-4 w-4 mr-2" />
                          Play
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">No voices found matching your criteria.</div>
          )}
        </div>
      </div>
    </div>
  )
}