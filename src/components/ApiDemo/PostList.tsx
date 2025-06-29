import React, { useState, useEffect } from 'react';
import { Loader2, AlertCircle, ChevronLeft, ChevronRight, Globe, Languages } from 'lucide-react';
import { PostCard } from './PostCard';
import { SearchBar } from './SearchBar';
import { Button } from '../ui/Button';
import { Card, CardContent, CardHeader } from '../ui/Card';
import { fetchPosts, fetchUsers } from '../../utils/api';
import type { Post, User } from '../../types';

export function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const postsPerPage = 9;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  const translations = {
    en: {
      loading: 'Loading posts...',
      error: 'Error Loading Posts',
      tryAgain: 'Try Again',
      searchPlaceholder: 'Search posts by title or content...',
      showingResults: 'Showing {count} results for "{query}"',
      showingPosts: 'Showing {count} posts',
      clearSearch: 'Clear Search',
      noPostsFound: 'No posts found',
      noPostsFoundDesc: 'Try adjusting your search terms.',
      noPostsAvailable: 'No posts available.',
      previous: 'Previous',
      next: 'Next',
      pageOf: 'Page {current} of {total}',
      language: 'Language',
      english: 'English',
      spanish: 'Español'
    },
    es: {
      loading: 'Cargando publicaciones...',
      error: 'Error al Cargar Publicaciones',
      tryAgain: 'Intentar de Nuevo',
      searchPlaceholder: 'Buscar publicaciones por título o contenido...',
      showingResults: 'Mostrando {count} resultados para "{query}"',
      showingPosts: 'Mostrando {count} publicaciones',
      clearSearch: 'Limpiar Búsqueda',
      noPostsFound: 'No se encontraron publicaciones',
      noPostsFoundDesc: 'Intenta ajustar tus términos de búsqueda.',
      noPostsAvailable: 'No hay publicaciones disponibles.',
      previous: 'Anterior',
      next: 'Siguiente',
      pageOf: 'Página {current} de {total}',
      language: 'Idioma',
      english: 'English',
      spanish: 'Español'
    }
  };

  const t = translations[language];

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [posts, searchQuery]);

  const loadData = async () => {
    try {
      setLoading(true);
      const [postsData, usersData] = await Promise.all([
        fetchPosts(1, 100),
        fetchUsers()
      ]);
      setPosts(postsData);
      setUsers(usersData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const filterPosts = () => {
    if (!searchQuery.trim()) {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.body.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
    setCurrentPage(1);
  };

  const handleSearch = () => {
    filterPosts();
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatText = (text: string, values: Record<string, any>) => {
    return text.replace(/\{(\w+)\}/g, (match, key) => values[key] || match);
  };

  if (loading) {
    return (
      <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-blue-50/30 dark:from-gray-800 dark:to-blue-900/10">
        <CardContent className="flex items-center justify-center py-16">
          <div className="text-center">
            <div className="relative">
              <Loader2 className="w-12 h-12 animate-spin text-blue-500 mx-auto mb-6" />
              <div className="absolute inset-0 w-12 h-12 border-4 border-blue-200 dark:border-blue-800 rounded-full mx-auto animate-pulse"></div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 font-medium">{t.loading}</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-red-50/30 dark:from-gray-800 dark:to-red-900/10">
        <CardContent className="flex items-center justify-center py-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {t.error}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">{error}</p>
            <Button onClick={loadData} className="shadow-lg hover:shadow-xl">
              {t.tryAgain}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-8">
      {/* Language Selector & Search */}
      <Card className="border-0 shadow-xl bg-gradient-to-r from-white to-blue-50/50 dark:from-gray-800 dark:to-blue-900/20">
        <CardContent className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">API Integration Demo</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">JSONPlaceholder API with internationalization</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Languages className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as 'en' | 'es')}
                className="px-4 py-2 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 font-medium"
              >
                <option value="en">{t.english}</option>
                <option value="es">{t.spanish}</option>
              </select>
            </div>
          </div>
          
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={handleSearch}
            placeholder={t.searchPlaceholder}
          />
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600 dark:text-gray-400 font-medium">
          {searchQuery ? (
            formatText(t.showingResults, { count: filteredPosts.length, query: searchQuery })
          ) : (
            formatText(t.showingPosts, { count: filteredPosts.length })
          )}
        </p>
        {searchQuery && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSearchQuery('')}
            className="shadow-md hover:shadow-lg"
          >
            {t.clearSearch}
          </Button>
        )}
      </div>

      {/* Posts Grid */}
      {currentPosts.length === 0 ? (
        <Card className="border-0 shadow-xl bg-gradient-to-br from-white to-gray-50/50 dark:from-gray-800 dark:to-gray-900/50">
          <CardContent className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-10 h-10 text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              {t.noPostsFound}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              {searchQuery ? t.noPostsFoundDesc : t.noPostsAvailable}
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PostCard
                post={post}
                user={users.find(user => user.id === post.userId)}
              />
            </div>
          ))}
        </div>
      )}

      {/* Enhanced Pagination */}
      {totalPages > 1 && (
        <Card className="border-0 shadow-xl bg-gradient-to-r from-white to-blue-50/30 dark:from-gray-800 dark:to-blue-900/10">
          <CardContent>
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  {t.previous}
                </Button>
                
                <div className="flex space-x-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    const pageNumber = i + 1;
                    return (
                      <Button
                        key={pageNumber}
                        variant={currentPage === pageNumber ? 'primary' : 'outline'}
                        size="sm"
                        onClick={() => goToPage(pageNumber)}
                        className="w-10 h-10 shadow-md hover:shadow-lg"
                      >
                        {pageNumber}
                      </Button>
                    );
                  })}
                  {totalPages > 5 && (
                    <span className="px-3 py-2 text-gray-500 dark:text-gray-400">...</span>
                  )}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {t.next}
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {formatText(t.pageOf, { current: currentPage, total: totalPages })}
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}