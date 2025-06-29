import React, { useState, useEffect } from 'react';
import { Filter } from 'lucide-react';
import { TaskForm } from './TaskForm';
import { TaskItem } from './TaskItem';
import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import type { Task, TaskFilter } from '../../types';

export function TaskManager() {
  const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);
  const [filter, setFilter] = useState<TaskFilter>('all');

  const addTask = (taskData: Omit<Task, 'id' | 'createdAt'>) => {
    const newTask: Task = {
      ...taskData,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const toggleTaskComplete = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'active':
        return !task.completed;
      case 'completed':
        return task.completed;
      default:
        return true;
    }
  });

  const taskStats = {
    total: tasks.length,
    completed: tasks.filter(task => task.completed).length,
    active: tasks.filter(task => !task.completed).length,
  };

  const filters: { key: TaskFilter; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'completed', label: 'Completed' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Task Manager
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Organize your tasks with priorities and track your progress
        </p>
      </div>

      {/* Task Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardContent className="text-center p-4">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              {taskStats.total}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Tasks</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="text-center p-4">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {taskStats.completed}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Completed</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="text-center p-4">
            <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
              {taskStats.active}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Active</div>
          </CardContent>
        </Card>
      </div>

      <TaskForm onAddTask={addTask} />

      {/* Filter Controls */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <span className="font-medium text-gray-900 dark:text-white">Filter Tasks</span>
            </div>
            <div className="flex space-x-2">
              {filters.map(({ key, label }) => (
                <Button
                  key={key}
                  variant={filter === key ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => setFilter(key)}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Tasks List */}
      <div className="space-y-4">
        {filteredTasks.length === 0 ? (
          <Card>
            <CardContent className="text-center py-12">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <Filter className="w-12 h-12 mx-auto mb-4" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {filter === 'all' ? 'No tasks yet' : `No ${filter} tasks`}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {filter === 'all'
                  ? 'Create your first task to get started!'
                  : `You don't have any ${filter} tasks right now.`}
              </p>
            </CardContent>
          </Card>
        ) : (
          filteredTasks.map(task => (
            <div key={task.id} className="group">
              <TaskItem
                task={task}
                onToggleComplete={toggleTaskComplete}
                onDeleteTask={deleteTask}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}