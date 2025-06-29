import React, { useState } from 'react';
import { Palette, Smartphone, Zap, Database, Shield, Globe, Play, Code, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function Examples() {
  const [selectedExample, setSelectedExample] = useState('responsive-design');

  const examples = [
    {
      id: 'responsive-design',
      title: 'Responsive Design',
      description: 'Mobile-first responsive layouts with Tailwind CSS',
      icon: Smartphone,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      difficulty: 'Beginner',
      tags: ['CSS', 'Mobile', 'Layout'],
      preview: '/api/placeholder/400/300',
      code: `// Responsive Grid Layout
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {items.map(item => (
    <Card key={item.id} hover className="transform transition-all duration-300">
      <CardContent>
        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
      </CardContent>
    </Card>
  ))}
</div>

// Responsive Navigation
<nav className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
  {navigation.map(item => (
    <Link 
      key={item.href}
      to={item.href}
      className="px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      {item.name}
    </Link>
  ))}
</nav>`
    },
    {
      id: 'theme-switching',
      title: 'Theme Switching',
      description: 'Dark/light mode implementation with context',
      icon: Palette,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      difficulty: 'Intermediate',
      tags: ['Context', 'Hooks', 'Theme'],
      preview: '/api/placeholder/400/300',
      code: `// Theme Context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || 'light';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Usage in Component
const { theme, toggleTheme } = useTheme();

<Button onClick={toggleTheme} variant="outline">
  {theme === 'light' ? <Moon /> : <Sun />}
</Button>`
    },
    {
      id: 'api-integration',
      title: 'API Integration',
      description: 'Fetching data with loading states and error handling',
      icon: Database,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
      difficulty: 'Intermediate',
      tags: ['API', 'Async', 'Error Handling'],
      preview: '/api/placeholder/400/300',
      code: `// Custom Hook for API Data
function useApiData<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

// Component Usage
function DataList() {
  const { data, loading, error } = useApiData<Post[]>('/api/posts');

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  
  return (
    <div className="grid gap-4">
      {data?.map(item => (
        <Card key={item.id}>
          <CardContent>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}`
    },
    {
      id: 'performance-optimization',
      title: 'Performance Optimization',
      description: 'Memoization and optimization techniques',
      icon: Zap,
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20',
      difficulty: 'Advanced',
      tags: ['Performance', 'Memoization', 'Optimization'],
      preview: '/api/placeholder/400/300',
      code: `// Memoized Component
const ExpensiveComponent = React.memo(({ data, onUpdate }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      processed: expensiveCalculation(item)
    }));
  }, [data]);

  const handleClick = useCallback((id: string) => {
    onUpdate(id);
  }, [onUpdate]);

  return (
    <div>
      {processedData.map(item => (
        <div key={item.id} onClick={() => handleClick(item.id)}>
          {item.processed}
        </div>
      ))}
    </div>
  );
});

// Lazy Loading
const LazyComponent = React.lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <LazyComponent />
    </Suspense>
  );
}

// Virtual Scrolling for Large Lists
function VirtualList({ items }) {
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 50 });
  
  const visibleItems = items.slice(visibleRange.start, visibleRange.end);
  
  return (
    <div className="h-96 overflow-auto" onScroll={handleScroll}>
      {visibleItems.map(item => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  );
}`
    },
    {
      id: 'security-patterns',
      title: 'Security Patterns',
      description: 'XSS prevention and secure coding practices',
      icon: Shield,
      color: 'from-red-500 to-rose-600',
      bgColor: 'from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20',
      difficulty: 'Advanced',
      tags: ['Security', 'XSS', 'Validation'],
      preview: '/api/placeholder/400/300',
      code: `// Input Sanitization
import DOMPurify from 'dompurify';

function SafeHtmlRenderer({ htmlContent }: { htmlContent: string }) {
  const sanitizedHtml = useMemo(() => {
    return DOMPurify.sanitize(htmlContent);
  }, [htmlContent]);

  return (
    <div 
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      className="prose dark:prose-invert"
    />
  );
}

// Form Validation
const schema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(2, 'Name must be at least 2 characters')
});

function SecureForm() {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = schema.parse(formData);
      await submitForm(validatedData);
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(error.flatten().fieldErrors);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={formData.email || ''}
        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        className="w-full px-4 py-2 border rounded-lg"
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
    </form>
  );
}`
    },
    {
      id: 'internationalization',
      title: 'Internationalization',
      description: 'Multi-language support implementation',
      icon: Globe,
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20',
      difficulty: 'Intermediate',
      tags: ['i18n', 'Localization', 'Context'],
      preview: '/api/placeholder/400/300',
      code: `// Translation Context
const translations = {
  en: {
    welcome: 'Welcome',
    loading: 'Loading...',
    error: 'An error occurred',
    search: 'Search...'
  },
  es: {
    welcome: 'Bienvenido',
    loading: 'Cargando...',
    error: 'Ocurrió un error',
    search: 'Buscar...'
  }
};

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState('en');
  
  const t = useCallback((key: string, values?: Record<string, any>) => {
    let text = translations[language][key] || key;
    
    if (values) {
      Object.entries(values).forEach(([key, value]) => {
        text = text.replace(\`{\${key}}\`, value);
      });
    }
    
    return text;
  }, [language]);

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

// Usage in Component
function WelcomeMessage({ userName }) {
  const { t, language, setLanguage } = useI18n();
  
  return (
    <div>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
      
      <h1>{t('welcome')}, {userName}!</h1>
      <p>{t('userCount', { count: 42 })}</p>
    </div>
  );
}`
    }
  ];

  const selectedExampleData = examples.find(ex => ex.id === selectedExample);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 rounded-2xl mb-8 shadow-2xl">
            <Code className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
              Code Examples
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Real-world examples and patterns from our React application. Learn by exploring 
            production-ready code with detailed explanations and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Examples List */}
          <div className="lg:col-span-1">
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900/50 sticky top-24">
              <CardHeader>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">Examples</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {examples.map((example) => {
                    const Icon = example.icon;
                    return (
                      <button
                        key={example.id}
                        onClick={() => setSelectedExample(example.id)}
                        className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                          selectedExample === example.id
                            ? `bg-gradient-to-r ${example.color} text-white shadow-lg transform scale-105`
                            : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          <Icon className="w-6 h-6 mt-1 flex-shrink-0" />
                          <div className="min-w-0">
                            <h4 className="font-semibold text-sm mb-1">{example.title}</h4>
                            <p className={`text-xs leading-relaxed ${
                              selectedExample === example.id ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'
                            }`}>
                              {example.description}
                            </p>
                            <div className="flex items-center space-x-2 mt-2">
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                selectedExample === example.id 
                                  ? 'bg-white/20 text-white' 
                                  : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                              }`}>
                                {example.difficulty}
                              </span>
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Selected Example */}
          <div className="lg:col-span-2">
            {selectedExampleData && (
              <Card className={`border-0 shadow-2xl bg-gradient-to-br ${selectedExampleData.bgColor} overflow-hidden`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${selectedExampleData.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <selectedExampleData.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {selectedExampleData.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">
                          {selectedExampleData.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Play className="w-4 h-4 mr-2" />
                        Run
                      </Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Open
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedExampleData.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/50 dark:bg-gray-700/50 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="bg-gray-900 dark:bg-gray-950 rounded-xl p-6 overflow-x-auto">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => navigator.clipboard.writeText(selectedExampleData.code)}
                        className="text-gray-400 hover:text-white border-gray-600 hover:border-gray-400"
                      >
                        <Code className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                    <pre className="text-sm text-gray-100 leading-relaxed">
                      <code>{selectedExampleData.code}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}