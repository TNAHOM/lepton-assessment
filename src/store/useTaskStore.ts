import { create, StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';
import { Task, TaskStatus, CreateTaskInput } from '@/types/task';

interface TaskState {
  tasks: Task[];
  filter: TaskStatus | 'all';
  addTask: (task: CreateTaskInput) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
  setFilter: (filter: TaskStatus | 'all') => void;
  getFilteredTasks: () => Task[];
}

type TaskStore = StateCreator<
  TaskState,
  [],
  [],
  TaskState
>;

export const useTaskStore = create<TaskState>()(
  persist(
    ((set: (fn: (state: TaskState) => TaskState) => void, get: () => TaskState) => ({
      tasks: [],
      filter: 'all',

      addTask: (taskInput: CreateTaskInput) => {
        const newTask: Task = {
          id: crypto.randomUUID(),
          ...taskInput,
          status: 'pending',
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        set((state: TaskState) => ({ tasks: [...state.tasks, newTask], filter: state.filter, addTask: state.addTask, updateTask: state.updateTask, deleteTask: state.deleteTask, setFilter: state.setFilter, getFilteredTasks: state.getFilteredTasks }));
      },

      updateTask: (id: string, updates: Partial<Task>) => {
        set((state: TaskState) => ({ tasks: state.tasks.map((task: Task) => task.id === id ? { ...task, ...updates, updatedAt: new Date() } : task), filter: state.filter, addTask: state.addTask, updateTask: state.updateTask, deleteTask: state.deleteTask, setFilter: state.setFilter, getFilteredTasks: state.getFilteredTasks }));
      },

      deleteTask: (id: string) => {
        set((state: TaskState) => ({ tasks: state.tasks.filter((task: Task) => task.id !== id), filter: state.filter, addTask: state.addTask, updateTask: state.updateTask, deleteTask: state.deleteTask, setFilter: state.setFilter, getFilteredTasks: state.getFilteredTasks }));
      },

      setFilter: (filter: TaskStatus | 'all') => {
        set((state: TaskState) => ({ filter, tasks: state.tasks, addTask: state.addTask, updateTask: state.updateTask, deleteTask: state.deleteTask, setFilter: state.setFilter, getFilteredTasks: state.getFilteredTasks }));
      },

      getFilteredTasks: () => {
        const state = get();
        if (state.filter === 'all') return state.tasks;
        return state.tasks.filter((task: Task) => task.status === state.filter);
      },
    })) as TaskStore,
    {
      name: 'task-storage',
    }
  )
); 