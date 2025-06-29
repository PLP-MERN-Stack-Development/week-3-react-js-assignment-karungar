import React from 'react';
import { User, MessageCircle, Calendar, Hash } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../ui/Card';
import type { Post, User as UserType } from '../../types';

interface PostCardProps {
  post: Post;
  user?: UserType;
}

export function PostCard({ post, user }: PostCardProps) {
  return (
    <Card hover className="h-full border-0 shadow-xl bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-800 dark:to-blue-900/10 group overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="relative">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <User className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 dark:text-white truncate">
              {user?.name || 'Unknown User'}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
              @{user?.username || 'unknown'}
            </p>
          </div>
          <div className="flex items-center space-x-1 text-xs text-gray-400 dark:text-gray-500">
            <Hash className="w-3 h-3" />
            <span>{post.id}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="relative">
        <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-4 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {post.title}
        </h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-4 mb-6">
          {post.body}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Discussion</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400 dark:text-gray-500">
            <Calendar className="w-4 h-4" />
            <span className="text-xs">Recent</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}