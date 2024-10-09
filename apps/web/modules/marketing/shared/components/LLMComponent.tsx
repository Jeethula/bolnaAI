"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/components/select";
import { Slider } from "@ui/components/slider";
import { Switch } from "@ui/components/switch";
import { ChevronDown, ChevronUp, Info } from "lucide-react";

function LLMComponent() {
  const [isAdvanced, setIsAdvanced] = useState(false);
  const [tokensGenerated, setTokensGenerated] = useState(100);
  const [temperature, setTemperature] = useState(70);

  return (
    <section className="font-light flex flex-col gap-y-7">
      <div className="flex gap-x-11 items-center">
        <label className="font-medium">Choose LLM Modal</label>
        <Select>
          <SelectTrigger className="w-[180px] min-w-fit min-h-fit border border-[#dadada] rounded-sm">
            <SelectValue placeholder="LLM Modal" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">OpenAi</SelectItem>
            <SelectItem value="dark">Gemini</SelectItem>
            <SelectItem value="system">llama</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px] border border-[#dadada] rounded-sm">
            <SelectValue placeholder="Version" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">chatgpt-3.5-turbo</SelectItem>
            <SelectItem value="dark">chatgpt-4.0-turbo</SelectItem>
            <SelectItem value="system">llama-2-7b-chat</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-x-14 items-center">
        <label className="flex flex-col">Tokens Generated</label>
        <Slider
          defaultValue={[100]}
          max={100}
          step={1}
          className="w-[400px]"
          onValueChange={(value: number[]) => setTokensGenerated(value[0])}
        />
        <div className="p-1 px-3 border border-[#dadada] rounded-sm bg-white">
          {tokensGenerated}
        </div>
      </div>
      <p className="text-[12px] flex items-center gap-x-2">
        <Info size={16} strokeWidth={1.5} />
        Increasing tokens enables longer responses to be queued before sending to the speech generation but increases latency
      </p>
      <div className="flex gap-x-20 items-center">
        <label className="flex flex-col ">Temperature</label>
        <Slider
          defaultValue={[70]}
          max={4096}
          step={1}
          className="w-[400px]"
          onValueChange={(value: number[]) => setTemperature(value[0])}
        />
        <div className="p-1 px-3 border border-[#dadada] rounded-sm bg-white">
          {temperature / 100}
        </div>
      </div>
      <p className="text-[12px] flex items-center gap-x-2">
        <Info size={16} strokeWidth={1.5} />
        Increasing temperature enables heightened creativity, but increases chance of deviation from prompt
      </p>
      {!isAdvanced && (
        <button
          className="w-full h-fit p-2 bg-[#F7F9FC] flex justify-center items-center rounded-2xl gap-x-2 font-medium"
          onClick={() => setIsAdvanced(!isAdvanced)}
        >
          Advanced Options <ChevronDown size={16} strokeWidth={1.5} />
        </button>
      )}
      {isAdvanced && (
        <button
          className="w-full h-fit p-2 bg-[#F7F9FC] flex justify-center items-center rounded-2xl gap-x-2 font-medium"
          onClick={() => setIsAdvanced(!isAdvanced)}
        >
          Show less Options <ChevronUp size={16} strokeWidth={1.5} />
        </button>
      )}
      {isAdvanced && (
        <div className="flex gap-y-7 flex-col">
          <div className="flex gap-x-11 items-center">
            <label className="font-medium">Add Knowledge base</label>
            <Select>
              <SelectTrigger className="w-[180px] min-w-fit min-h-fit border border-[#dadada] rounded-sm">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">OpenAi</SelectItem>
                <SelectItem value="dark">Gemini</SelectItem>
                <SelectItem value="system">llama</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-x-36">
            <label className="font-medium">Use Fillers</label>
            <Switch />
          </div>
          <p className="text-[12px] flex items-center gap-x-2">
            <Info size={16} strokeWidth={1.5} />
            Fillers can smooth out conversation, but may reduce performance.
          </p>
        </div>
      )}
    </section>
  );
}

export default LLMComponent;