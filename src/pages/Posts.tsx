import React from 'react';
import { PostList } from '../components/ApiDemo/PostList';

export function Posts() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            API Integration Demo
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Fetching data from JSONPlaceholder API with search, pagination, and error handling
          </p>
        </div>
        
        <PostList />
      </div>
    </div>
  );
}