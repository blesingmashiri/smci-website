import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import App from './App';
import Chatbot from './components/Chatbot';
import RootWrapper from './RootWrapper';
import './index.css';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RootWrapper>
          <App />
        </RootWrapper>
        <Chatbot /> {/* 🚀 Mounted outside layout */}
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
