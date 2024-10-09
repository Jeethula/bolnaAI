import { useState } from 'react'
import { Button } from "../../../../modules/ui/components/button"
import { Input } from "../../../../modules/ui/components/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../../../modules/ui/components/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../../modules/ui/components/select"
import { Badge } from "../../../../modules/ui/components/badge"
import { X } from 'lucide-react'
import { Pagination } from './Pagenation'

interface LogEntry {
  timestamp: string
  logData: string
  action: 'request' | 'response'
  engine: string
  llm: string
}

const dummyLogs: LogEntry[] = [
  { timestamp: 'September 23, 2024, 13:36:53', logData: 'system: You are a helpful agent. You will help the customer with their queries and doubts. You will never speak more than 2 sentences. Keep your responses concise...', action: 'request', engine: 'llm', llm: 'gpt-4o' },
  { timestamp: 'September 23, 2024, 13:36:54', logData: 'Hi! How can I assist you today?', action: 'response', engine: 'llm', llm: 'gpt-4o' },
  { timestamp: 'September 23, 2024, 13:37:00', logData: 'system: You are a helpful agent. You will help the customer with their queries and doubts.', action: 'request', engine: 'llm', llm: 'gpt-4o' },
  { timestamp: 'September 23, 2024, 13:37:01', logData: 'I can help answer questions, provide information, and assist. What do you need help with?', action: 'response', engine: 'llm', llm: 'gpt-4o' },
  { timestamp: 'September 23, 2024, 13:37:05', logData: 'system: You are a helpful agent. You will help the customer with their queries and doubts.', action: 'request', engine: 'llm', llm: 'gpt-4o' },
  { timestamp: 'September 23, 2024, 13:37:06', logData: "I'm available 24/7 to assist you. How can I help you today?", action: 'response', engine: 'llm', llm: 'gpt-4o' },
  // Add more log entries here...
]

interface ExecutionLogsViewProps {
  onClose: () => void
}

export function ExecutionLogsView({ onClose }: ExecutionLogsViewProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [filter, setFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const itemsPerPage = 6
  const filteredLogs = dummyLogs.filter(log => 
    (filter === 'All' || log.action === filter.toLowerCase()) &&
    (log.logData.toLowerCase().includes(searchTerm.toLowerCase()) ||
     log.timestamp.toLowerCase().includes(searchTerm.toLowerCase()))
  )
  const totalPages = Math.ceil(filteredLogs.length / itemsPerPage)
  const paginatedLogs = filteredLogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="fixed inset-0 bg-background z-50 overflow-y-auto">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Agent Execution logs</h2>
          <Button variant="ghost" onClick={onClose}>
            <X className="h-6 w-6" />
          </Button>
        </div>
        <p className="text-muted-foreground mb-4">These are the agent execution logs displaying every request and the corresponding response</p>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Trailer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="trailer1">Trailer 1</SelectItem>
                <SelectItem value="trailer2">Trailer 2</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Batch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="batch1">Batch 1</SelectItem>
                <SelectItem value="batch2">Batch 2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Input 
            type="text" 
            placeholder="Search" 
            className="w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="flex space-x-2 mb-4">
          <Badge 
            className={filter === 'All' ? 'badge-default' : 'badge-outline'}
            onClick={() => setFilter('All')}
          >
            All
          </Badge>
          <Badge 
            className={filter === 'requests' ? 'badge-default' : 'badge-outline'}
            onClick={() => setFilter('requests')}
          >
            requests
          </Badge>
          <Badge 
            className={filter === 'responses' ? 'badge-default' : 'badge-outline'}
            onClick={() => setFilter('responses')}
          >
            responses
          </Badge>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Timestamp</TableHead>
              <TableHead>Log Data</TableHead>
              <TableHead>Action</TableHead>
              <TableHead>Engine</TableHead>
              <TableHead>LLM</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedLogs.map((log, index) => (
              <TableRow key={index}>
                <TableCell>{log.timestamp}</TableCell>
                <TableCell>{log.logData}</TableCell>
                <TableCell>
                  <Badge className={log.action === 'request' ? 'badge-default' : 'badge-secondary'}>
                    {log.action}
                  </Badge>
                </TableCell>
                <TableCell>{log.engine}</TableCell>
                <TableCell>{log.llm}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  )
}