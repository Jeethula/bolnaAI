import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ui/components/select";
import { Switch } from "@ui/components/switch";
import { Info } from "lucide-react";

function TasksComponent() {
    return (
        <div className="flex flex-col gap-y-5 px-3">
          <h1 className="text-[#489C9A]">Post call Tasks</h1>   
          <div className="flex flex-col gap-y-3 mt-2">
            <div className="flex gap-x-36 mt-3">
            <label className="font-medium text-[#686C89]">Summarization</label>
            <Switch />
          </div>
         <p className="text-[12px] flex items-center gap-x-2"> <Info size={16} strokeWidth={1.5} /> Generate a summary of the conversation automatically</p>  
         </div>
         <div className="flex gap-x-16 items-center">
            <label className="text-[#686C89]">Model Selection</label>
            <Select>
                <SelectTrigger className="w-[253px] ml-16 min-w-fit min-h-fit border border-[#dadada] rounded-sm">
                    <SelectValue placeholder="gpt" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">gpt-3.5-turbo-1106</SelectItem>
                    <SelectItem value="dark">gpt-4-1106-preview</SelectItem>
                    <SelectItem value="dark">gpt-4-vision-preview</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className="flex flex-col gap-y-3 ">
            <div className="flex gap-x-36 mt-3">
            <label className="font-medium text-[#686C89] mr-10">Extraction</label>
            <Switch  />
          </div>
         <p className="text-[12px] flex items-center gap-x-2"> <Info size={16} strokeWidth={1.5} /> Extract structured information from the conversation</p>  
         </div>

         <div className="flex gap-x-32 items-center">
          <label className="font-medium text-[#686C89] max-w-44">Custom Prompt</label>
          <textarea  placeholder="user_name  : Yield the name of the user.
payment_mode : if paying, yield cash." className="w-56 h-24 rounded-lg p-2"/>
         </div>

         <div className="flex flex-col gap-y-3 ">
            <div className="flex gap-x-24 mt-3">
            <label className="font-medium text-[#686C89] max-w-44">Post Extracted Data to Webhook</label>
            <Switch />
          </div>
         <p className="text-[12px] flex items-center gap-x-2"> <Info size={16} strokeWidth={1.5} /> Automatically receive extracted information.</p>  
         </div>
         <textarea placeholder="Please provide a valid URL" className="w-full h-20 rounded-lg mb-4"/>
        </div>
    );
}

export default TasksComponent;