import React from 'react';
import { Link } from 'react-router-dom';
import { CheckSquare, FileText, Zap, Smartphone, Palette, Code, ArrowRight, Star } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardHeader } from '../components/ui/Card';

export function Home() {
  const features = [
    {
      icon: CheckSquare,
      title: 'Task Management',
      description: 'Complete CRUD operations with local storage persistence and priority levels.',
      link: '/tasks',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20'
    },
    {
      icon: FileText,
      title: 'API Integration',
      description: 'Fetch and display data from JSONPlaceholder with search and pagination.',
      link: '/posts',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20'
    },
    {
      icon: Zap,
      title: 'React Hooks',
      description: 'Demonstrates useState, useEffect, useContext, and custom hooks.',
      link: '/examples',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first design that works perfectly on all device sizes.',
      link: '/examples',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    {
      icon: Palette,
      title: 'Theme Switching',
      description: 'Dark and light mode with smooth transitions and user preference persistence.',
      link: '/documentation',
      color: 'from-rose-500 to-pink-600',
      bgColor: 'from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20'
    },
    {
      icon: Code,
      title: 'Clean Architecture',
      description: 'Well-organized components with TypeScript and modern React patterns.',
      link: '/api-reference',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20'
    }
  ];

  const stats = [
    { label: 'Components', value: '25+', color: 'text-blue-600 dark:text-blue-400' },
    { label: 'Custom Hooks', value: '8+', color: 'text-green-600 dark:text-green-400' },
    { label: 'Pages', value: '7', color: 'text-purple-600 dark:text-purple-400' },
    { label: 'TypeScript', value: '100%', color: 'text-orange-600 dark:text-orange-400' }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl mb-8 shadow-2xl animate-bounce-subtle">
            <CheckSquare className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              React Mastery
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed">
            A comprehensive React application demonstrating modern front-end development with 
            beautiful UI components, state management, API integration, and responsive design.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link to="/tasks">
              <Button size="lg" className="w-full sm:w-auto shadow-2xl hover:shadow-3xl transform hover:scale-105">
                <Zap className="w-5 h-5 mr-2" />
                Explore Task Manager
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/posts">
              <Button variant="outline" size="lg" className="w-full sm:w-auto shadow-xl hover:shadow-2xl">
                <FileText className="w-5 h-5 mr-2" />
                View API Demo
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Discover the powerful features that make ReactMaster a comprehensive 
              learning platform for modern React development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} hover className={`border-0 shadow-xl bg-gradient-to-br ${feature.bgColor} group overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <CardHeader className="relative">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {feature.title}
                        </h3>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative">
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <Link to={feature.link}>
                      <Button variant="outline" size="sm" className="w-full shadow-md hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                        Explore Feature
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Technology Stack */}
        <Card className="mb-20 border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
          <CardHeader className="relative text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Built With Modern Technologies
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Leveraging the latest tools and frameworks for optimal performance and developer experience.
            </p>
          </CardHeader>
          <CardContent className="relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { name: 'React 18', desc: 'Latest React with hooks', color: 'from-blue-500 to-cyan-500' },
                { name: 'TypeScript', desc: 'Type safety & IntelliSense', color: 'from-blue-600 to-indigo-600' },
                { name: 'Tailwind CSS', desc: 'Utility-first styling', color: 'from-teal-500 to-green-500' },
                { name: 'Vite', desc: 'Fast build tool', color: 'from-purple-500 to-pink-500' }
              ].map((tech, index) => (
                <div key={index} className="space-y-4 group">
                  <div className={`w-20 h-20 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <Code className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-lg">{tech.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{tech.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="border-0 shadow-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20"></div>
          <CardContent className="py-16 relative text-center">
            <div className="flex items-center justify-center mb-6">
              <Star className="w-8 h-8 text-yellow-300 mr-2" />
              <Star className="w-10 h-10 text-yellow-300 mr-2" />
              <Star className="w-8 h-8 text-yellow-300" />
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Explore?
            </h2>
            <p className="text-blue-100 mb-10 max-w-3xl mx-auto text-xl leading-relaxed">
              Dive into the task manager to see React hooks in action, explore our comprehensive 
              API demo with internationalization, or browse our extensive documentation and examples.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/tasks">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 text-white border-white/30 hover:bg-white/20 shadow-xl hover:shadow-2xl backdrop-blur-sm">
                  <CheckSquare className="w-5 h-5 mr-2" />
                  Start Managing Tasks
                </Button>
              </Link>
              <Link to="/documentation">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 text-white border-white/30 hover:bg-white/20 shadow-xl hover:shadow-2xl backdrop-blur-sm">
                  <Code className="w-5 h-5 mr-2" />
                  View Documentation
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}