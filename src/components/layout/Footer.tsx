import React from 'react';
import { Heart, Github, Twitter, Linkedin, Mail, Globe } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: 'hover:text-blue-500' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Mail, href: 'mailto:contact@reactmaster.dev', label: 'Email', color: 'hover:text-red-500' },
  ];

  const quickLinks = [
    { name: 'Documentation', href: '/documentation' },
    { name: 'API Reference', href: '/api-reference' },
    { name: 'Examples', href: '/examples' },
    { name: 'Support', href: '/support' },
  ];

  const resources = [
    { name: 'React.js', href: 'https://reactjs.org' },
    { name: 'TypeScript', href: 'https://typescriptlang.org' },
    { name: 'Tailwind CSS', href: 'https://tailwindcss.com' },
    { name: 'Vite', href: 'https://vitejs.dev' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 border-t border-gray-200/50 dark:border-gray-700/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-xl opacity-20"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  ReactMaster
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                  Professional Edition
                </span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-md">
              A comprehensive React application showcasing enterprise-level front-end development practices. 
              Built with modern technologies and designed for scalability, performance, and maintainability.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                      {social.label}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45"></div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '/' },
                { name: 'Task Manager', href: '/tasks' },
                { name: 'API Demo', href: '/posts' },
                ...quickLinks
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm font-medium hover:translate-x-1 transform transition-transform"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Built With</h3>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a 
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm font-medium hover:translate-x-1 transform transition-transform flex items-center space-x-2"
                  >
                    <Globe className="w-3 h-3" />
                    <span>{resource.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600 dark:text-gray-400">
              <p>© {currentYear} ReactMaster Professional. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms of Service</a>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
              Crafted with <Heart className="w-4 h-4 mx-2 text-red-500" fill="currentColor" /> for developers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}