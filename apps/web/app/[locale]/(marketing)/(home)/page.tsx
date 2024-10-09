"use client";

import { Input } from "@ui/components/input";
import { useState } from "react";
import CallComponent from "../../../../modules/marketing/shared/components/CallComponent";
import VoiceComponent from "../../../../modules/marketing/shared/components/VoiceComponent";
import TranscriberComponent from "../../../../modules/marketing/shared/components/TranscriberComponent";
import TasksComponent from "../../../../modules/marketing/shared/components/TasksComponent";
import FunctionsComponent from "../../../../modules/marketing/shared/components/FunctionsComponent";
import AgentComponent from "../../../../modules/marketing/shared/components/AgentComponent";
import LLMComponent from "../../../../modules/marketing/shared/components/LLMComponent";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/components/select";
import { Brain, CalendarCheck, MicVocal, PhoneIncoming, PhoneOutgoing } from "lucide-react";
import MakeCall from "../../../../modules/marketing/shared/components/Makecall"; // Import the MakeCall component
import ReciveCall from "@marketing/shared/components/ReciveCall";
import { useRouter } from "next/navigation";

const tabscomponents: any = {
  call: CallComponent,
  voice: VoiceComponent,
  transcriber: TranscriberComponent,
  tasks: TasksComponent,
  functions: FunctionsComponent,
  agent: AgentComponent,
  llm: LLMComponent,
};

export default function Home() {
  const communication = ["Call", "Voice", "Transcriber"];
  const operations = ["Tasks", "Functions", "Agent", "LLM"];

  const navigation = useRouter();

  const [activeTab, setActiveTab] = useState("call");
  const [isCallModalOpen, setIsCallModalOpen] = useState(false); 
  const [isReceiveCallModalOpen, setIsReceiveCallModalOpen] = useState(false);

  const ActiveTabComponent = tabscomponents[activeTab];

  const handleMakecall = () => {
    console.log("Make call");
    setIsCallModalOpen(true); 
  };

  const handleReceiveCall = () => {
    console.log("Receive call");
    setIsReceiveCallModalOpen(true);
  }

  return (
    <main className="p-3 px-4 w-full flex flex-col items-center h-screen text-[#686C89] font-medium">
      <section className="flex w-[500px]">
        <Input placeholder="Search Agent" className="p-3 bg-white" />
      </section>
      <section className="w-full h-full m-5 bg-[#E7F5F5] rounded-2xl p-4">
        <div className="h-[15%] flex justify-between font-light">
          <div className="w-[50%] flex flex-col gap-y-3">
            <div className="flex items-end gap-x-5 font-light">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Agents" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Trailer</SelectItem>
                  <SelectItem value="dark">Mine</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
			  <h1 className="text-[#686C89] underline cursor-pointer" onClick={()=>navigation.push("/batches")}>view logs</h1>
            </div>
            <div className="flex gap-x-3">
				<button onClick={handleMakecall} className="bg-[#F7F9FC] border border-[#dadada] text-green-600 flex gap-x-2 items-center p-2 rounded-md"><PhoneOutgoing size={16} strokeWidth={1.5} />Make call</button>
				<button onClick={handleReceiveCall} className="bg-[#F7F9FC] border border-[#dadada] text-orange-500 flex gap-x-2 items-center p-2 rounded-md"><PhoneIncoming size={16} strokeWidth={1.5} />Receive call</button>
				<button onClick={()=>navigation.push("/batches")} className="bg-[#F7F9FC] border border-[#dadada] text-blue-500 flex gap-x-2  items-center p-2 rounded-md"><CalendarCheck size={16} strokeWidth={1.5} />Schedule call</button>
			</div>
          </div>
          <div className="w-[50%] flex justify-end">
			<div className="flex flex-col gap-y-3 ">
				<div className="p-1 px-5 border border-[#dadada] rounded-md flex gap-x-2 items-center cursor-pointer"><MicVocal size={20} strokeWidth={1.5} />Danielle</div>
				<div className="p-1 px-5 border border-[#dadada] rounded-md flex gap-x-2 items-center cursor-pointer"><Brain size={20} strokeWidth={1.5} />Azure open AI</div>
			</div>
		  </div>
        </div>
        <div className="bg-white h-[85%] w-full border border-[#dadada] rounded-md flex p-3">
          <div className="w-[15%] h-full">
            <h1 className="text-[#B8B8B8] font-normal">Communications</h1>
            <ul className="flex flex-col  ">
              {communication.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer  ${
                    activeTab === item.toLowerCase()
                      ? "bg-[#f1f1f1] p-3  rounded-sm  text-[#489C9A]"
                      : "p-3"
                  }`}
                  onClick={() => setActiveTab(item.toLowerCase())}
                >
                  {item}
                </li>
              ))}
            </ul>
            <h1 className="text-[#B8B8B8] font-normal mt-2 ">Operations</h1>
            <ul className="flex flex-col mt-2">
              {operations.map((item, index) => (
                <li
                  key={index}
                  className={`cursor-pointer  ${
                    activeTab === item.toLowerCase()
                      ? "bg-[#f1f1f1] p-3  rounded-sm  text-[#489C9A]"
                      : "p-3"
                  }`}
                  onClick={() => setActiveTab(item.toLowerCase())}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[1px] m-3 ml-6 mr-8 bg-[#dadada]"></div>
          <div className="w-[85%] min-h-full max-h-screen  overflow-auto">
            {ActiveTabComponent && <ActiveTabComponent />}
          </div>
        </div>
      </section>
      {isCallModalOpen && <MakeCall onClose={() => setIsCallModalOpen(false)} />}
      {isReceiveCallModalOpen && <ReciveCall onClose={() => setIsReceiveCallModalOpen(false)} />}
    </main>
  );
}