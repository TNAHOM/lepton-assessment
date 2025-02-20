import { AnimatePresence } from 'framer-motion';
import { Task } from '@/types/task';
import { TaskCard } from './TaskCard';

interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, status: Task['status']) => void;
  onDelete: (taskId: string) => void;
}

export const TaskList = ({ tasks, onStatusChange, onDelete }: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No tasks found. Create a new task to get started!
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <AnimatePresence>
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onStatusChange={(status) => onStatusChange(task.id, status)}
            onDelete={() => onDelete(task.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}; 