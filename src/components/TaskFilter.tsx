import { TaskStatus } from '@/types/task';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface TaskFilterProps {
  value: TaskStatus | 'all';
  onChange: (value: TaskStatus | 'all') => void;
}

export const TaskFilter = ({ value, onChange }: TaskFilterProps) => {
  return (
    <div className="w-[200px]">
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Tasks</SelectItem>
          <SelectItem value="started">Started</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}; 