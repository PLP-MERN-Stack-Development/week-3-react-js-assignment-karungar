import React from 'react';
import { Check, Trash2, Clock, AlertTriangle, Zap } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';
import { Button } from '../ui/Button';
import type { Task } from '../../types';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function TaskItem({ task, onToggleComplete, onDeleteTask }: TaskItemProps) {
  const priorityIcons = {
    low: Clock,
    medium: AlertTriangle,
    high: Zap,
  };

  const priorityColors = {
    low: 'text-blue-500 bg-blue-100 dark:bg-blue-900/30',
    medium: 'text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30',
    high: 'text-red-500 bg-red-100 dark:bg-red-900/30',
  };

  const PriorityIcon = priorityIcons[task.priority];

  return (
    <Card hover className={`transition-all duration-300 ${task.completed ? 'opacity-75' : ''}`}>
      <CardContent className="p-4">
        <div className="flex items-start space-x-4">
          <button
            onClick={() => onToggleComplete(task.id)}
            className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
              task.completed
                ? 'bg-green-500 border-green-500 text-white'
                : 'border-gray-300 dark:border-gray-600 hover:border-primary-500'
            }`}
          >
            {task.completed && <Check className="w-3 h-3" />}
          </button>

          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2 mb-2">
              <h3
                className={`font-medium transition-all duration-200 ${
                  task.completed
                    ? 'line-through text-gray-500 dark:text-gray-400'
                    : 'text-gray-900 dark:text-white'
                }`}
              >
                {task.title}
              </h3>
              <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${priorityColors[task.priority]}`}>
                <PriorityIcon className="w-3 h-3 mr-1" />
                {task.priority}
              </div>
            </div>
            
            {task.description && (
              <p
                className={`text-sm transition-all duration-200 ${
                  task.completed
                    ? 'line-through text-gray-400 dark:text-gray-500'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
              >
                {task.description}
              </p>
            )}
            
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
              Created {new Date(task.createdAt).toLocaleDateString()}
            </p>
          </div>

          <Button
            variant="danger"
            size="sm"
            onClick={() => onDeleteTask(task.id)}
            className="p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}