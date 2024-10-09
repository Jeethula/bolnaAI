"use client";
import { useState } from "react";
import { Button } from "../../../../modules/ui/components/button"
import { Input } from "../../../../modules/ui/components/input"
import { Search, SlidersHorizontal, Grid2X2 } from "lucide-react"
import ProviderEnterApi from "@marketing/shared/components/ProviderEnterApi";

export default function page() {

    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Providers</h1>
      <p className="text-gray-600 mb-6">Add keys securely to connect your own Providers within Kovan.</p>
      
      <div className="flex justify-between items-center mb-6">
        <div className="relative flex-grow mr-4">
          <Input 
            type="text" 
            placeholder="Search for language, voice, accent, or provider" 
            className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
        {/* <Button className="bg-[#5BA893] hover:bg-[#4A8B78] text-white" onClick={() => setIsModalOpen(true)}>
          Create a new API key
        </Button> */}
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          <Button variant="outline" className="bg-gray-100 text-gray-700 hover:bg-gray-200">All</Button>
          <Button variant="outline" className="text-gray-700">AI models</Button>
          <Button variant="outline" className="text-gray-700">Communication</Button>
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
      
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Communication Providers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {['Plivo', 'Sinch AB', 'Message Bird', 'Plivo'].map((provider, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{provider}</h3>
            <p className="text-sm text-gray-600 mb-4 text-center">Global Communication API</p>
            <Button className="bg-[#5BA893] hover:bg-[#4A8B78] text-white w-full" onClick={() => setIsModalOpen(true)}>
              Connect
            </Button>
          </div>
        ))}
      </div>
      
      <h2 className="text-lg font-semibold text-gray-800 mb-4">API Providers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {['OpenAI', 'Deepgram', 'Twilio', 'Perplexity'].map((provider, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6 flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{provider}</h3>
            <p className="text-sm text-gray-600 mb-4 text-center">
              {index === 0 || index === 3 ? 'AI model for natural' : index === 1 ? 'Speech to text API' : 'SMS, Voice API'}
            </p>
            <Button className="bg-[#5BA893] hover:bg-[#4A8B78] text-white w-full" onClick={() => setIsModalOpen(true)}>
              Connect
            </Button>
          </div>
        ))}
      </div>
      {isModalOpen &&  <ProviderEnterApi onClose={() => setIsModalOpen(false)} />}
    </div>
  )
}