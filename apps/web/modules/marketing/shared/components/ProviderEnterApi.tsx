import { Copy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../../ui/components/dialog";
import { Input } from "../../../ui/components/input";
import { toast, useToast } from "@ui/hooks/use-toast";

interface ProviderEnterApiProps {
  onClose: () => void;
}

export default function ProviderEnterApi({ onClose }: ProviderEnterApiProps) {
//   const { toast } = useToast();
//   const handleCopy = () => {
//     const textToCopy = "https://example.com";
//     navigator.clipboard
//       .writeText(textToCopy)
//       .then(() => {
//         toast({
//           title: "Copied to clipboard",
//         });
//       })
//       .catch((error) => {
//         console.error("Failed to copy text: ", error);
//       });
//   };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px]  bg-white text-[#878787]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-left text-black">
            Recive call
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-y-6">
          <Input
            type="text"
            placeholder="Paste the API key here"
            className="placeholder-custom"
          />
          <p>
            These are securely stored. Once saved, even we won't be able to see
            these keys.
          </p>

          <button
            className="bg-[#489C9A] text-white font-semibold hover:bg-[#1a4443] rounded-lg p-2"
          >
            Connect
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
