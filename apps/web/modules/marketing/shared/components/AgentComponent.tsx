import { Input } from "@ui/components/input";

function AgentComponent() {
    return (
        <div className="flex flex-col gap-y-10"> 
         <div className="text-[#686C89] flex flex-col gap-y-3">
            <h1 className="text-[#686C89] font-medium">Agent Welcome Message</h1>
            <Input placeholder="Agent welcome Message" className="mt-1"/>
            <p className="font-normal">This will be the initial message from the agent. You can use variables here using</p>
         </div>
         <div className="text-[#686C89] flex flex-col gap-y-3 ">
            <h1 className="text-[#686C89] font-medium">Agent Prompt</h1>
            <textarea className="w-full rounded-lg p-3 mt-1 min-h-32 "   placeholder="You are a helpful agent. You will help the customer with their queries and doubts. You will never speak more than 2 sentences. Keep your responses concise"/>
            <p className="font-normal">You can define variables in the prompt using</p>
         </div>
        </div>
    );
}

export default AgentComponent;