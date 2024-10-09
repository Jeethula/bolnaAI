import { Button } from "../../../../modules/ui/components/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../modules/ui/components/table"
import { Badge } from "../../../../modules/ui/components/badge"
import { Clipboard } from 'lucide-react'

interface Execution {
  id: string
  type: string
  duration: number
  timestamp: string
  cost: number
  status: 'Completed' | 'Failed'
}

interface ExecutionsTableProps {
  data: Execution[]
  onMoreClick: (execution: Execution) => void
}

export function ExecutionsTable({ data, onMoreClick }: ExecutionsTableProps) {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Execution ID</TableHead>
          <TableHead>Conversation Type</TableHead>
          <TableHead>Duration (seconds)</TableHead>
          <TableHead>Timestamp</TableHead>
          <TableHead>Cost (credits)</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>More</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((execution) => (
          <TableRow key={execution.id}>
            <TableCell className="font-medium">
              {execution.id.substring(0, 15)}...
              <Button variant="ghost" size="icon" onClick={() => handleCopy(execution.id)}>
                <Clipboard className="h-4 w-4" />
              </Button>
            </TableCell>
            <TableCell>{execution.type}</TableCell>
            <TableCell>{execution.duration}</TableCell>
            <TableCell>{execution.timestamp}</TableCell>
            <TableCell>{execution.cost}</TableCell>
            <TableCell>
              <Badge className={execution.status === 'Completed' ? 'badge-success' : 'badge-destructive'}>
                {execution.status}
              </Badge>
            </TableCell>
            <TableCell>
              <Button variant="ghost" size="sm" onClick={() => onMoreClick(execution)}>More</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}