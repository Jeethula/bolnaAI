import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ui/components/select";


function FunctionsComponent() {
    return (
        <div className="p-3 flex flex-col gap-y-4">
        <h1 className="text-[#489C9A]">Create Function</h1>
        <div className="flex gap-x-10 items-center">
            <label className="text-[#686C89] font-medium">Choose Functions</label>
            <Select>
                <SelectTrigger className="w-[253px] ml-2 min-w-fit min-h-fit border border-[#dadada] rounded-sm">
                    <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Check Slot availability</SelectItem>
                    <SelectItem value="dark">Transfer call to human agent</SelectItem>
                    <SelectItem value="dak">Add you custom function</SelectItem>
                </SelectContent>
            </Select>
            <button className="bg-[#3A7D7B] text-md text-white rounded-lg max-w-fit w-full h-fit px-3 py-2">Add Function</button>
        </div>
        <h1 className="text-[#489C9A] mt-5">Functions</h1>
        </div>
    );
}

export default FunctionsComponent;