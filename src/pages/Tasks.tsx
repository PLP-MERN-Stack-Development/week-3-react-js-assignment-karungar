import React from 'react';
import { TaskManager } from '../components/TaskManager/TaskManager';

export function Tasks() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <TaskManager />
    </div>
  );
}