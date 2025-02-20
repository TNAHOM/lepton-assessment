import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { Task } from '@/types/task';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Trash2 } from 'lucide-react';

interface TaskCardProps {
  task: Task;
  onStatusChange: (status: Task['status']) => void;
  onDelete: () => void;
}

const statusColors = {
  started: 'bg-blue-500',
  pending: 'bg-yellow-500',
  completed: 'bg-green-500',
};

export const TaskCard = ({ task, onStatusChange, onDelete }: TaskCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <Badge variant="outline" className={statusColors[task.status]}>
              {task.status}
            </Badge>
          </div>
          <Button variant="ghost" size="icon" onClick={onDelete}>
            <Trash2 className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">{task.description}</p>
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>
              {format(new Date(task.startTime), 'MMM d, yyyy HH:mm')} -{' '}
              {format(new Date(task.endTime), 'MMM d, yyyy HH:mm')}
            </span>
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onStatusChange('started')}
            disabled={task.status === 'started'}
          >
            Start
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onStatusChange('pending')}
            disabled={task.status === 'pending'}
          >
            Pending
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onStatusChange('completed')}
            disabled={task.status === 'completed'}
          >
            Complete
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}; 