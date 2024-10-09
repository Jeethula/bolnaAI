"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ui/components/select";
import { Slider } from "@ui/components/slider";
import { Switch } from "@ui/components/switch";
import { Info } from "lucide-react";
import { useState } from "react";


function TranscriberComponent() {

    const [word, setWord] = useState(70);
    return (
        <div className="px-3 flex flex-col gap-y-5 text-[#878787]">
        <div className="flex gap-x-16">
            <label className="text-[#686C89]">Choose Transcriber</label>
            <Select>
                <SelectTrigger className="w-[253px] min-w-fit min-h-fit border border-[#dadada] rounded-sm">
                    <SelectValue placeholder="Transcriber" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">OpenAi</SelectItem>
                    <SelectItem value="dark">Gemini</SelectItem>
                    <SelectItem value="system">llama</SelectItem>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="w-[253px] min-w-fit min-h-fit border border-[#dadada] rounded-sm">
                    <SelectValue placeholder="Version" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">chatgpt-3.5-turbo</SelectItem>
                    <SelectItem value="dark">chatgpt-4.0-turbo</SelectItem>
                    <SelectItem value="system">llama-2-7b-chat</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className="flex gap-x-16">
            <label className="text-[#686C89]">Choose Language</label>
            <Select>
                <SelectTrigger className="w-[253px] ml-2 min-w-fit min-h-fit border border-[#dadada] rounded-sm">
                    <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">English</SelectItem>
                    <SelectItem value="dark">Spanish</SelectItem>
                    <SelectItem value="system">French</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className="flex gap-y-3 flex-col ">
            <div className="flex gap-x-20">
            <label className="text-[#686C89]">Keywords</label>
            <input type="text" className="w-full ml-14 min-w-fit min-h-fit border border-[#dadada] rounded-sm" placeholder="grow"/>
            </div>
            <p className="text-[12px] flex items-center gap-x-2"> <Info size={16} strokeWidth={1.5} /> Enter certain keywords/proper nouns you'd want to boost while understanding speech </p>
        </div>
        <div className="flex flex-col gap-y-3">
        <div className="flex gap-x-20 items-center">
        <label className="flex flex-col text-[#686C89] max-w-44">Number of Words to Wait
        Before Interrupting</label>
        <Slider
          defaultValue={[70]}
          max={4096}
          step={1}
          className="w-[400px]"
          onValueChange={(value: number[]) => setWord(value[0])}
        />
        <div className="p-1 px-3 border border-[#dadada] rounded-sm bg-white">
          {word}
        </div>
      </div>
      <p className="text-[12px] flex items-center gap-x-2"> <Info size={16} strokeWidth={1.5} /> Agent will not consider interruptions until these many words are spoken (If recipient says “Stopwords” such as Stop, Wait, Hold On, agent will pause by default)</p>
        </div>
        <hr className="mt-4 mb-4 border-[#dadada]"/>
        <div className="flex gap-x-36">
            <label className="font-medium text-[#686C89]">Backchanneling</label>
            <Switch />
          </div>
          <p className="text-[12px] flex items-center gap-x-2"> <Info size={16} strokeWidth={1.5} /> Agent will speak filler words in between sentences to show the recipient that they are listening to theme</p>
        </div>
    );
}

export default TranscriberComponent;