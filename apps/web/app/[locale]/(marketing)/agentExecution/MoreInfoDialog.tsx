import { Button } from "../../../../modules/ui/components/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../../../../modules/ui/components/dialog"

interface MoreInfoDialogProps {
  execution: { id: string } | null
  onClose: () => void
  onTranscriptClick: () => void
  onExecutionLogsClick: () => void
}

export function MoreInfoDialog({ execution, onClose, onTranscriptClick, onExecutionLogsClick }: MoreInfoDialogProps) {
  if (!execution) return null

  return (
    <Dialog open={!!execution} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>More info</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p><strong>Execution ID:</strong> {execution.id}</p>
          <div>
            <h4 className="font-semibold">Transcript</h4>
            <p className="text-sm text-muted-foreground">A transcript is a written record of a conversation</p>
          </div>
          <div>
            <h4 className="font-semibold">Executions Logs</h4>
            <p className="text-sm text-muted-foreground">AI interactions, timestamps and detailed informations</p>
          </div>
          <Button onClick={onTranscriptClick} className="w-full">View Transcript</Button>
          <Button onClick={onExecutionLogsClick} className="w-full">View Logs</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}