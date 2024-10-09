import { Button } from "../../../../modules/ui/components/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../../modules/ui/components/dialog"

interface TranscriptDialogProps {
  open: boolean
  onClose: () => void
}

export function TranscriptDialog({ open, onClose }: TranscriptDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Conversation Details</DialogTitle>
        </DialogHeader>
        <div className="max-h-[60vh] overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <span className="font-semibold min-w-[100px]">[10:30:01 AM]</span>
              <span className="font-semibold min-w-[80px]">assistant</span>
              <p>Hello from Bolna</p>
            </div>
            <div className="flex items-start space-x-4">
              <span className="font-semibold min-w-[100px]">[10:30:01 AM]</span>
              <span className="font-semibold min-w-[80px]">user</span>
              <p>hi</p>
            </div>
            {/* Add more conversation items here */}
          </div>
        </div>
        <Button onClick={onClose} className="mt-4">Close</Button>
      </DialogContent>
    </Dialog>
  )
}