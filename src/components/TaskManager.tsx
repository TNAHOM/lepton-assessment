'use client';

import { TaskForm } from '@/components/TaskForm';
import { TaskList } from '@/components/TaskList';
import { TaskFilter } from '@/components/TaskFilter';
import { useTaskStore } from '@/store/useTaskStore';
import { CreateTaskInput, Task } from '@/types/task';
import { CardHeader } from './ui/card';

export function TaskManager() {
  const {
    filter,
    addTask,
    updateTask,
    deleteTask,
    setFilter,
    getFilteredTasks,
  } = useTaskStore();

  const handleAddTask = (taskInput: CreateTaskInput) => {
    addTask(taskInput);
  };

  const handleStatusChange = (taskId: string, status: Task['status']) => {
    updateTask(taskId, { status });
  };

  const handleDeleteTask = (taskId: string) => {
    deleteTask(taskId);
  };

  return (
    <div className="flex justify-center gap-8">
      <div className="w-full">
        <CardHeader>
          <h3 className="text-lg font-semibold">Add New Task</h3>
        </CardHeader> 
        <TaskForm onSubmit={handleAddTask} />
      </div>

      <div className="space-y-8 w-full">
        <div className="flex justify-end">
          <TaskFilter value={filter} onChange={setFilter} />
        </div>
        {getFilteredTasks().length === 0 ? (
          <div className="text-center text-gray-500">
            No tasks available
          </div>
        ) : (
          <TaskList
          tasks={getFilteredTasks()}
          onStatusChange={handleStatusChange}
          onDelete={handleDeleteTask}
          />
        )}
      </div>
    </div>
  );
} 