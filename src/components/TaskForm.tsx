'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CreateTaskInput } from '@/types/task';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface TaskFormProps {
  onSubmit: (task: CreateTaskInput) => void;
}

export const TaskForm = ({ onSubmit }: TaskFormProps) => {
  const [formData, setFormData] = useState<CreateTaskInput>({
    title: '',
    description: '',
    startTime: new Date(),
    endTime: new Date(),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: '',
      description: '',
      startTime: new Date(),
      endTime: new Date(),
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Card>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2 mt-6">
              <label htmlFor="title" className="text-sm font-medium">
                Title
              </label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">
                Description
              </label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="startTime" className="text-sm font-medium">
                  Start Time
                </label>
                <Input
                  id="startTime"
                  type="datetime-local"
                  value={formData.startTime.toISOString().slice(0, 16)}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      startTime: new Date(e.target.value),
                    })
                  }
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="endTime" className="text-sm font-medium">
                  End Time
                </label>
                <Input
                  id="endTime"
                  type="datetime-local"
                  value={formData.endTime.toISOString().slice(0, 16)}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      endTime: new Date(e.target.value),
                    })
                  }
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Add Task</Button>
          </CardFooter>
        </form>
      </Card>
    </motion.div>
  );
}; 