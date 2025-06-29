import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Tasks } from './pages/Tasks';
import { Posts } from './pages/Posts';
import { Documentation } from './pages/Documentation';
import { ApiReference } from './pages/ApiReference';
import { Examples } from './pages/Examples';
import { Support } from './pages/Support';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/api-reference" element={<ApiReference />} />
            <Route path="/examples" element={<Examples />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;