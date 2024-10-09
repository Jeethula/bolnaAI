"use client";
import { Input } from "@ui/components/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ui/components/select";
import { Slider } from "@ui/components/slider";
import { Switch } from "@ui/components/switch";
import { Info } from "lucide-react";
import { useState } from "react";

function VoiceComponent() {
    const [size, setSize] = useState(70);
    const [linear, setLinear] = useState(70);
    const [endPointing, setEndPointing] = useState(70);
    const [invokeMsg,setinvokeMsg] = useState(70);
    return (
        <div className="flex flex-col gap-y-7 ">
            <h1 className="text-[#489C9A]">Synthesizer</h1>
            <div className="flex gap-x-16 mt-2 items-center">
            <label className="text-[#686C89]">Choose Synthesizer</label>
            <Select>
                <SelectTrigger className="w-[253px] min-w-fit min-h-fit border border-[#dadada] rounded-sm">
                    <SelectValue placeholder="Synthesizer" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">11labs</SelectItem>
                    <SelectItem value="dark">Gemini</SelectItem>
                    <SelectItem value="system">llama</SelectItem>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-[253px] min-w-fit min-h-fit border border-[#dadada] rounded-sm">
                    <SelectValue placeholder="Version" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">vikram</SelectItem>
                    <SelectItem value="dark">chatgpt-4.0-turbo</SelectItem>
                    <SelectItem value="system">llama-2-7b-chat</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className="flex flex-col gap-y-3">
        <div className="flex gap-x-32 items-center">
        <label className="flex flex-col text-[#686C89] max-w-44">Buffer Size</label>
        <Slider
          defaultValue={[70]}
          max={4096}
          step={1}
          className="w-[400px] ml-20"
          onValueChange={(value: number[]) => setSize(value[0])}
        />
        <div className="p-1 px-3 border border-[#dadada] rounded-sm bg-white">
          {size}
        </div>
      </div>
      <p className="text-[12px] flex items-center gap-x-2"> <Info size={16} strokeWidth={1.5} /> Increasing tokens enables longer responses to be queued before sending to the speech generation but increases latency</p>
        </div>
        <h1 className="text-[#489C9A] mt-3">Control Latency & Interruptions</h1>
        <div className="flex flex-col gap-y-3 mt-3">
        <div className="flex gap-x-32 items-center">
        <label className="flex flex-col text-[#686C89] max-w-44">Linear Delay (in ms)</label>
        <Slider
          defaultValue={[70]}
          max={4096}
          step={1}
          className="w-[400px]"
          onValueChange={(value: number[]) => setLinear(value[0])}
        />
        <div className="p-1 px-3 border border-[#dadada] rounded-sm bg-white">
          {linear}
        </div>
      </div>
      <p className="text-[12px] flex items-center gap-x-2"> <Info size={16} strokeWidth={1.5} />Increasing temperature enables heightened creativity, but increases chance of deviation from prompt</p>
        </div>
        <div className="flex flex-col gap-y-3">
        <div className="flex gap-x-32 items-center">
        <label className="flex flex-col text-[#686C89] max-w-44">Endpointing (in ms)</label>
        <Slider
          defaultValue={[70]}
          max={4096}
          step={1}
          className="w-[400px]"
          onValueChange={(value: number[]) => setEndPointing(value[0])}
        />
        <div className="p-1 px-3 border border-[#dadada] rounded-sm bg-white">
          {endPointing}
        </div>
      </div>
      <p className="text-[12px] flex items-center gap-x-2"> <Info size={16} strokeWidth={1.5} /> Increasing temperature enables heightened creativity, but increases chance of deviation from prompt</p>
        </div>
         <div className="flex gap-x-16 items-center">
            <label className="text-[#686C89]">Ambient Noise</label>
            <Select>
                <SelectTrigger className="w-[253px] ml-2 min-w-fit min-h-fit border border-[#dadada] rounded-sm">
                    <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">No Ambient Noise</SelectItem>
                    <SelectItem value="dark">Ambient Noise</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <h1 className="text-[#489C9A] mt-3 ">User Availability</h1>
        {/*  <div className="flex gap-x-36 mt-3">
            <label className="font-medium text-[#686C89]">Check if User is Online</label>
            <Switch />
          </div>
         <p className="text-[12px] flex items-center gap-x-2"> <Info size={16} strokeWidth={1.5} /> Agent will check if the user is online if there's no reply from the user</p>
          <div className="flex flex-col gap-y-3">
        <div className="flex gap-x-32 items-center">
        <label className="flex flex-col text-[#686C89] max-w-44">Endpointing (in ms)</label>
        <Slider
          defaultValue={[70]}
          max={4096}
          step={1}
          className="w-[400px]"
          onValueChange={(value: number[]) => setinvokeMsg(value[0])}
        />
        <div className="p-1 px-3 border border-[#dadada] rounded-sm bg-white">
          {invokeMsg}
        </div>
      </div>
      <p className="text-[12px] flex items-center gap-x-2"> <Info size={16} strokeWidth={1.5} /> Increasing tokens enables longer responses to be queued before sending to the speech generation but increases latency</p>
        </div> */}
        {/* <div className="text-[#686C89] flex gap-x-14 items-center">
            <h1 className="text-[#686C89] min-w-fit font-medium">User Online Message</h1>
            <Input placeholder="Hey, are you still there" className="mt-1"/>
         </div> */}
        </div>
    );
}

export default VoiceComponent;