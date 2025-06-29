import React from 'react';
import { Book, Code, Zap, Shield, Layers, Rocket, ChevronRight, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function Documentation() {
  const sections = [
    {
      icon: Rocket,
      title: 'Getting Started',
      description: 'Quick setup guide to get your React application running in minutes.',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20',
      items: [
        'Installation & Setup',
        'Project Structure',
        'Development Server',
        'Build & Deployment'
      ]
    },
    {
      icon: Layers,
      title: 'Component Architecture',
      description: 'Learn about our modular component system and design patterns.',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
      items: [
        'Component Structure',
        'Props & State Management',
        'Custom Hooks',
        'Context Providers'
      ]
    },
    {
      icon: Code,
      title: 'API Integration',
      description: 'Comprehensive guide to integrating external APIs and data fetching.',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      items: [
        'Fetch API Usage',
        'Error Handling',
        'Loading States',
        'Data Caching'
      ]
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimization techniques for building fast and efficient applications.',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
      items: [
        'Code Splitting',
        'Lazy Loading',
        'Memoization',
        'Bundle Optimization'
      ]
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Best practices for securing your React applications.',
      color: 'from-red-500 to-rose-600',
      bgColor: 'from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20',
      items: [
        'XSS Prevention',
        'CSRF Protection',
        'Secure Authentication',
        'Data Validation'
      ]
    },
    {
      icon: Book,
      title: 'Advanced Topics',
      description: 'Deep dive into advanced React concepts and patterns.',
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20',
      items: [
        'Higher-Order Components',
        'Render Props',
        'Error Boundaries',
        'Server-Side Rendering'
      ]
    }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-2xl mb-8 shadow-2xl">
            <Book className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Documentation
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive guides, tutorials, and references to help you master React development 
            with our professional-grade application architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-xl hover:shadow-2xl">
              <Rocket className="w-5 h-5 mr-2" />
              Quick Start Guide
            </Button>
            <Button variant="outline" size="lg" className="shadow-lg hover:shadow-xl">
              <ExternalLink className="w-5 h-5 mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>

        {/* Documentation Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card 
                key={index} 
                hover 
                className={`border-0 shadow-xl bg-gradient-to-br ${section.bgColor} group overflow-hidden`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {section.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {section.description}
                  </p>
                </CardHeader>
                
                <CardContent className="relative">
                  <ul className="space-y-3 mb-6">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                        <ChevronRight className="w-4 h-4 text-blue-500" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full shadow-md hover:shadow-lg">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Reference */}
        <Card className="border-0 shadow-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-pink-600/20"></div>
          <CardContent className="py-16 relative">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Need Quick Help?</h2>
              <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-lg">
                Access our comprehensive API reference, code examples, and troubleshooting guides 
                to solve problems quickly and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20 shadow-xl">
                  <Code className="w-5 h-5 mr-2" />
                  API Reference
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/30 hover:bg-white/20 shadow-xl">
                  <Zap className="w-5 h-5 mr-2" />
                  Code Examples
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}