import { Copy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../ui/components/dialog";
import { Input } from "../../../ui/components/input";
import { toast, useToast } from "@ui/hooks/use-toast";

interface ReciveCallProps {
  onClose: () => void;
}

export default function ReciveCall({ onClose }: ReciveCallProps) {
    const { toast } = useToast()
  const handleCopy = () => {
    const textToCopy = "https://example.com";
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        toast({
            title: "Copied to clipboard",
        })
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[725px]  bg-white text-[#878787]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-left text-black">
            Recive call
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-y-6">
          <p>
            Please copy and paste this link in your twilio account as per the
            docs to start answering your phone number by this agent. Inbound
            Agent URL
          </p>
          <div className="flex  gap-x-2">
            <Input type="text" value={"https://example.com"} readOnly />
            <button onClick={handleCopy}>
              <Copy size={20} />
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}