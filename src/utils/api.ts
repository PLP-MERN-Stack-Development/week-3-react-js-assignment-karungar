const API_BASE = 'https://jsonplaceholder.typicode.com';

export async function fetchPosts(page = 1, limit = 10) {
  const response = await fetch(`${API_BASE}/posts?_page=${page}&_limit=${limit}`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}

export async function fetchUsers() {
  const response = await fetch(`${API_BASE}/users`);
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  return response.json();
}

export async function searchPosts(query: string) {
  const response = await fetch(`${API_BASE}/posts?q=${encodeURIComponent(query)}`);
  if (!response.ok) {
    throw new Error('Failed to search posts');
  }
  return response.json();
}