import React, { useState } from 'react';
import { Code, Search, BookOpen, Zap, Database, Shield, ChevronDown, ChevronRight, Copy } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function ApiReference() {
  const [selectedCategory, setSelectedCategory] = useState('components');
  const [expandedItems, setExpandedItems] = useState<string[]>(['Button']);

  const categories = [
    { id: 'components', name: 'Components', icon: Code, color: 'from-blue-500 to-indigo-600' },
    { id: 'hooks', name: 'Hooks', icon: Zap, color: 'from-green-500 to-emerald-600' },
    { id: 'utils', name: 'Utilities', icon: BookOpen, color: 'from-purple-500 to-pink-600' },
    { id: 'api', name: 'API Methods', icon: Database, color: 'from-orange-500 to-red-600' },
    { id: 'types', name: 'TypeScript Types', icon: Shield, color: 'from-cyan-500 to-blue-600' }
  ];

  const apiData = {
    components: [
      {
        name: 'Button',
        description: 'Versatile button component with multiple variants and sizes',
        props: [
          { name: 'variant', type: "'primary' | 'secondary' | 'danger' | 'outline'", default: "'primary'", description: 'Button style variant' },
          { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", description: 'Button size' },
          { name: 'disabled', type: 'boolean', default: 'false', description: 'Disable button interaction' },
          { name: 'children', type: 'React.ReactNode', default: '-', description: 'Button content' }
        ],
        example: `<Button variant="primary" size="lg">
  Click me
</Button>`
      },
      {
        name: 'Card',
        description: 'Container component with glass morphism effects',
        props: [
          { name: 'hover', type: 'boolean', default: 'false', description: 'Enable hover animations' },
          { name: 'className', type: 'string', default: '-', description: 'Additional CSS classes' },
          { name: 'children', type: 'React.ReactNode', default: '-', description: 'Card content' }
        ],
        example: `<Card hover>
  <CardHeader>Title</CardHeader>
  <CardContent>Content</CardContent>
</Card>`
      }
    ],
    hooks: [
      {
        name: 'useLocalStorage',
        description: 'Custom hook for localStorage management with TypeScript support',
        params: [
          { name: 'key', type: 'string', description: 'Storage key' },
          { name: 'initialValue', type: 'T', description: 'Default value' }
        ],
        returns: '[storedValue, setValue]',
        example: `const [tasks, setTasks] = useLocalStorage<Task[]>('tasks', []);`
      },
      {
        name: 'useTheme',
        description: 'Access theme context for light/dark mode switching',
        params: [],
        returns: '{ theme: Theme, toggleTheme: () => void }',
        example: `const { theme, toggleTheme } = useTheme();`
      }
    ],
    utils: [
      {
        name: 'cn',
        description: 'Utility function for conditional className concatenation',
        params: [
          { name: '...classes', type: '(string | undefined | null | false)[]', description: 'Class names to combine' }
        ],
        returns: 'string',
        example: `cn('base-class', condition && 'conditional-class', className)`
      }
    ],
    api: [
      {
        name: 'fetchPosts',
        description: 'Fetch posts from JSONPlaceholder API with pagination',
        params: [
          { name: 'page', type: 'number', default: '1', description: 'Page number' },
          { name: 'limit', type: 'number', default: '10', description: 'Items per page' }
        ],
        returns: 'Promise<Post[]>',
        example: `const posts = await fetchPosts(1, 20);`
      },
      {
        name: 'fetchUsers',
        description: 'Fetch all users from JSONPlaceholder API',
        params: [],
        returns: 'Promise<User[]>',
        example: `const users = await fetchUsers();`
      }
    ],
    types: [
      {
        name: 'Task',
        description: 'Task object interface for task management',
        properties: [
          { name: 'id', type: 'string', description: 'Unique identifier' },
          { name: 'title', type: 'string', description: 'Task title' },
          { name: 'description', type: 'string | undefined', description: 'Optional description' },
          { name: 'completed', type: 'boolean', description: 'Completion status' },
          { name: 'priority', type: "'low' | 'medium' | 'high'", description: 'Task priority' },
          { name: 'createdAt', type: 'Date', description: 'Creation timestamp' }
        ]
      },
      {
        name: 'Theme',
        description: 'Theme type for light/dark mode',
        properties: [
          { name: 'value', type: "'light' | 'dark'", description: 'Theme mode' }
        ]
      }
    ]
  };

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName) 
        ? prev.filter(item => item !== itemName)
        : [...prev, itemName]
    );
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 rounded-2xl mb-8 shadow-2xl">
            <Code className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              API Reference
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Complete reference documentation for all components, hooks, utilities, and TypeScript types 
            in the ReactMaster application.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900/50 sticky top-24">
              <CardHeader>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white flex items-center">
                  <Search className="w-5 h-5 mr-2 text-blue-500" />
                  Categories
                </h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-left ${
                          selectedCategory === category.id
                            ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                            : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{category.name}</span>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {apiData[selectedCategory as keyof typeof apiData].map((item, index) => (
                <Card key={index} className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-800 dark:to-blue-900/10">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${categories.find(c => c.id === selectedCategory)?.color} rounded-lg flex items-center justify-center`}>
                          <Code className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.name}</h3>
                          <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => toggleExpanded(item.name)}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        {expandedItems.includes(item.name) ? (
                          <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                        )}
                      </button>
                    </div>
                  </CardHeader>
                  
                  {expandedItems.includes(item.name) && (
                    <CardContent className="border-t border-gray-200/50 dark:border-gray-700/50">
                      {/* Props/Parameters */}
                      {(item as any).props && (
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Props</h4>
                          <div className="overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                  <th className="text-left py-2 font-medium text-gray-900 dark:text-white">Name</th>
                                  <th className="text-left py-2 font-medium text-gray-900 dark:text-white">Type</th>
                                  <th className="text-left py-2 font-medium text-gray-900 dark:text-white">Default</th>
                                  <th className="text-left py-2 font-medium text-gray-900 dark:text-white">Description</th>
                                </tr>
                              </thead>
                              <tbody>
                                {(item as any).props.map((prop: any, propIndex: number) => (
                                  <tr key={propIndex} className="border-b border-gray-100 dark:border-gray-800">
                                    <td className="py-2 font-mono text-blue-600 dark:text-blue-400">{prop.name}</td>
                                    <td className="py-2 font-mono text-purple-600 dark:text-purple-400">{prop.type}</td>
                                    <td className="py-2 font-mono text-gray-600 dark:text-gray-400">{prop.default}</td>
                                    <td className="py-2 text-gray-600 dark:text-gray-300">{prop.description}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                      {/* Example */}
                      {(item as any).example && (
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold text-gray-900 dark:text-white">Example</h4>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => copyToClipboard((item as any).example)}
                              className="p-2"
                            >
                              <Copy className="w-4 h-4" />
                            </Button>
                          </div>
                          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm text-gray-100">
                              <code>{(item as any).example}</code>
                            </pre>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}