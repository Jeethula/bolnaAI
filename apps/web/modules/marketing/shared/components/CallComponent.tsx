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
import { Info } from "lucide-react";

function CallComponent() {
  const [hangUpDuration, setHangUpDuration] = useState(50);
  const [terminationDuration, setTerminationDuration] = useState(30);

  return (
    <section className="flex flex-col gap-y-6 font-light">
      <h1 className="font-medium text-[#489C9A]">Call Management Settings</h1>
      <div className="flex gap-x-10 items-center">
        <label className="">Provider</label>
        <Select>
          <SelectTrigger className="w-[180px] border border-[#dadada] rounded-sm">
            <SelectValue placeholder="Provider" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Twilio</SelectItem>
            <SelectItem value="dark">Mine</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-x-20 items-center">
        <label className="flex flex-col">
          Call Hang up Duration
          <span>(in seconds)</span>
        </label>
        <Slider
          defaultValue={[50]}
          max={30}
          step={1}
          className="w-[400px]"
          onValueChange={(value: number[]) => setHangUpDuration(value[0])}
        />
        <div className="p-1 px-3 border border-[#dadada] rounded-sm bg-white">{hangUpDuration}</div>
      </div>
      <p className="text-[12px] flex items-center gap-x-2"><Info size={16} strokeWidth={1.5} />Defines how long to wait before ending a call if there's no sound.</p>
      <div className="flex gap-x-14 items-center">
        <label className="flex flex-col">
         Call Termination Duration 
          <span>(in seconds)</span>
        </label>
        <Slider
          defaultValue={[30]}
          max={600}
          step={1}
          className="w-[400px]"
          onValueChange={(value: number[]) => setTerminationDuration(value[0])}
        />
        <div className="p-1 px-3 border border-[#dadada] rounded-sm bg-white">{terminationDuration}</div>
      </div>
      <p className="text-[12px] flex items-center gap-x-2"><Info size={16} strokeWidth={1.5} />Set the maximum duration for a call. The call will automatically end after this time to ensure efficient handling of multiple calls.</p>
    </section>
  );
}

export default CallComponent;