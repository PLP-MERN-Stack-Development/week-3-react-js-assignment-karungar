import React, { useState } from 'react';
import { HelpCircle, MessageCircle, Mail, Phone, Clock, CheckCircle, AlertTriangle, Send } from 'lucide-react';
import { Card, CardContent, CardHeader } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export function Support() {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    subject: '',
    message: ''
  });

  const supportCategories = [
    { id: 'general', name: 'General Questions', icon: HelpCircle, color: 'from-blue-500 to-indigo-600' },
    { id: 'technical', name: 'Technical Issues', icon: AlertTriangle, color: 'from-red-500 to-rose-600' },
    { id: 'feature', name: 'Feature Requests', icon: CheckCircle, color: 'from-green-500 to-emerald-600' },
    { id: 'billing', name: 'Billing & Account', icon: MessageCircle, color: 'from-purple-500 to-pink-600' }
  ];

  const faqItems = [
    {
      category: 'general',
      question: 'How do I get started with ReactMaster?',
      answer: 'Getting started is easy! Simply clone the repository, install dependencies with npm install, and run npm run dev to start the development server. Check our documentation for detailed setup instructions.'
    },
    {
      category: 'general',
      question: 'What technologies are used in this project?',
      answer: 'ReactMaster is built with React 18, TypeScript, Tailwind CSS, Vite, and includes features like dark mode, API integration, and responsive design. All dependencies are listed in the package.json file.'
    },
    {
      category: 'technical',
      question: 'Why is my build failing?',
      answer: 'Build failures are usually caused by missing dependencies, TypeScript errors, or environment issues. Check the console output for specific error messages and ensure all dependencies are installed correctly.'
    },
    {
      category: 'technical',
      question: 'How do I fix TypeScript errors?',
      answer: 'TypeScript errors typically indicate type mismatches or missing type definitions. Review the error messages carefully, ensure proper typing, and check that all imports have correct type definitions.'
    },
    {
      category: 'feature',
      question: 'Can I customize the theme colors?',
      answer: 'Yes! The theme colors are defined in tailwind.config.js. You can modify the primary and secondary color palettes to match your brand. The dark mode variants will automatically adjust.'
    },
    {
      category: 'feature',
      question: 'How do I add new components?',
      answer: 'Create new components in the src/components directory following the existing structure. Use TypeScript interfaces for props, implement proper styling with Tailwind CSS, and export from the appropriate index file.'
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      contact: 'support@reactmaster.dev',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available 9 AM - 6 PM EST',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Speak directly with our technical team',
      contact: '+1 (555) 123-4567',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'
    }
  ];

  const filteredFAQ = faqItems.filter(item => item.category === selectedCategory);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Support form submitted:', formData);
    // Handle form submission
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-600 rounded-2xl mb-8 shadow-2xl">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Support Center
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Get the help you need with ReactMaster. Browse our FAQ, contact support, 
            or submit a ticket for personalized assistance.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <Card key={index} hover className={`border-0 shadow-xl bg-gradient-to-br ${method.bgColor} group`}>
                <CardContent className="text-center p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {method.description}
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {method.contact}
                  </p>
                  <Button className="mt-4 shadow-lg hover:shadow-xl">
                    Contact Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FAQ Section */}
          <div>
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900/50">
              <CardHeader>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Frequently Asked Questions
                </h2>
                <div className="flex flex-wrap gap-2">
                  {supportCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {filteredFAQ.map((item, index) => (
                    <div key={index} className="border-b border-gray-200/50 dark:border-gray-700/50 pb-6 last:border-b-0">
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-start">
                        <HelpCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        {item.question}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed ml-7">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Support Form */}
          <div>
            <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-800 dark:to-blue-900/10">
              <CardHeader>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Submit a Support Ticket
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Can't find what you're looking for? Send us a message and we'll get back to you.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Category
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                    >
                      {supportCategories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-all duration-200 resize-none"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full shadow-xl hover:shadow-2xl">
                    <Send className="w-5 h-5 mr-2" />
                    Send Support Ticket
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Response Time Info */}
        <Card className="mt-16 border-0 shadow-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white">
          <CardContent className="py-12 text-center">
            <Clock className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl font-bold mb-4">Our Response Times</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-2xl font-bold mb-2">{'< 1 Hour'}</div>
                <div className="text-emerald-100">Critical Issues</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">{'< 24 Hours'}</div>
                <div className="text-emerald-100">General Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">{'< 48 Hours'}</div>
                <div className="text-emerald-100">Feature Requests</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}