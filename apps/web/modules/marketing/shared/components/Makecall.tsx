import { Button } from "../../../ui/components/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../ui/components/dialog";
import { Input } from "../../../ui/components/input";
import { Label } from "../../../ui/components/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../ui/components/select";
import { X } from "lucide-react";

interface MakeCallProps {
  onClose: () => void;
}

export default function MakeCall({ onClose }: MakeCallProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white text-[#878787]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-left text-black">Make call</DialogTitle>
        </DialogHeader>
        <div className="grid gap-y-5 py-4">
          <div className="grid gap-4">
            <Label htmlFor="phone" className="text-black">Phone number</Label>
            <div className="flex">
              <Select defaultValue="IN">
                <SelectTrigger className="w-[70px]">
                  <SelectValue placeholder="IN" className="text-black" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="IN">IN</SelectItem>
                  <SelectItem value="US">US</SelectItem>
                  <SelectItem value="UK">UK</SelectItem>
                </SelectContent>
              </Select>
              <Input id="phone" className="flex-1 ml-2 placeholder-custom" defaultValue="+91 7823737862" />
            </div>
            <p className="text-sm text-[#878787]">
              Enter phone numbers with country code
              <br />
              (for example: +16507638870)
            </p>
          </div>
          <div className="grid gap-4">
            <Label htmlFor="call-type" className="text-black">Calls will be made using</Label>
            <Select defaultValue="private">
              <SelectTrigger id="call-type">
                <SelectValue placeholder="Select call type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="private">Private numbers</SelectItem>
                <SelectItem value="public">Public numbers</SelectItem>
              </SelectContent>
            </Select>
            <p className="text-sm text-[#878787]">
              connect to your twilio account for making calls from custom numbers
            </p>
          </div>
        </div>
        <Button className="w-full bg-[#5BA893] hover:bg-[#4A8B78]">View Logs</Button>
      </DialogContent>
    </Dialog>
  );
}