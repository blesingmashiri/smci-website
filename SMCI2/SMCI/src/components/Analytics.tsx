import React, { useEffect, useState } from 'react';

interface PageView {
  path: string;
  timestamp: number;
  userAgent: string;
  referrer?: string;
  sessionId: string;
}

interface AnalyticsData {
  totalViews: number;
  uniqueSessions: number;
  pageViews: { [key: string]: number };
  dailyViews: { [key: string]: number };
  topPages: Array<{ path: string; views: number }>;
}

const Analytics: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Generate or get session ID
  const getSessionId = (): string => {
    let sessionId = sessionStorage.getItem('smci_session_id');
    if (!sessionId) {
      sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('smci_session_id', sessionId);
    }
    return sessionId;
  };

  // Track page view
  const trackPageView = () => {
    const pageView: PageView = {
      path: window.location.pathname,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      referrer: document.referrer || undefined,
      sessionId: getSessionId()
    };

    // Store in localStorage (in production, this would send to a server)
    const existingViews = JSON.parse(localStorage.getItem('smci_analytics') || '[]');
    existingViews.push(pageView);
    
    // Keep only last 1000 views to prevent localStorage overflow
    if (existingViews.length > 1000) {
      existingViews.splice(0, existingViews.length - 1000);
    }
    
    localStorage.setItem('smci_analytics', JSON.stringify(existingViews));
  };

  // Process analytics data
  const processAnalyticsData = (): AnalyticsData => {
    const views = JSON.parse(localStorage.getItem('smci_analytics') || '[]') as PageView[];
    
    const totalViews = views.length;
    const uniqueSessions = new Set(views.map(v => v.sessionId)).size;
    
    const pageViews: { [key: string]: number } = {};
    const dailyViews: { [key: string]: number } = {};
    
    views.forEach(view => {
      // Count page views
      pageViews[view.path] = (pageViews[view.path] || 0) + 1;
      
      // Count daily views
      const date = new Date(view.timestamp).toLocaleDateString();
      dailyViews[date] = (dailyViews[date] || 0) + 1;
    });
    
    // Get top pages
    const topPages = Object.entries(pageViews)
      .map(([path, views]) => ({ path, views }))
      .sort((a, b) => b.views - a.views)
      .slice(0, 5);
    
    return {
      totalViews,
      uniqueSessions,
      pageViews,
      dailyViews,
      topPages
    };
  };

  useEffect(() => {
    trackPageView();
    
    // Track page view changes (for SPA)
    const handleRouteChange = () => {
      trackPageView();
    };
    
    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', handleRouteChange);
    
    // Custom event for programmatic navigation
    window.addEventListener('routechange', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('routechange', handleRouteChange);
    };
  }, []);

  const loadAnalyticsData = () => {
    const data = processAnalyticsData();
    setAnalyticsData(data);
    setIsVisible(true);
  };

  // Only show analytics in development or when accessed via specific key combination
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl+Shift+A to toggle analytics
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        if (isVisible) {
          setIsVisible(false);
        } else {
          loadAnalyticsData();
        }
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  if (!isVisible || !analyticsData) {
    return null;
  }

  const exportData = () => {
    const dataStr = JSON.stringify(analyticsData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `smci-analytics-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const clearData = () => {
    if (confirm('Are you sure you want to clear all analytics data?')) {
      localStorage.removeItem('smci_analytics');
      setAnalyticsData(null);
      setIsVisible(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-4 w-80 max-h-96 overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Website Analytics</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-gray-600"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-4">
          {/* Summary Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-3 rounded">
              <div className="text-2xl font-bold text-blue-600">{analyticsData.totalViews}</div>
              <div className="text-sm text-blue-800">Total Views</div>
            </div>
            <div className="bg-green-50 p-3 rounded">
              <div className="text-2xl font-bold text-green-600">{analyticsData.uniqueSessions}</div>
              <div className="text-sm text-green-800">Unique Sessions</div>
            </div>
          </div>
          
          {/* Top Pages */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Top Pages</h4>
            <div className="space-y-2">
              {analyticsData.topPages.map((page, index) => (
                <div key={page.path} className="flex justify-between items-center">
                  <span className="text-sm text-gray-600 truncate flex-1">
                    {index + 1}. {page.path === '/' ? 'Home' : page.path}
                  </span>
                  <span className="text-sm font-medium text-gray-900">{page.views}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Recent Daily Views */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Recent Activity</h4>
            <div className="space-y-1">
              {Object.entries(analyticsData.dailyViews)
                .slice(-5)
                .reverse()
                .map(([date, views]) => (
                  <div key={date} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{date}</span>
                    <span className="text-sm font-medium text-gray-900">{views} views</span>
                  </div>
                ))}
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex gap-2 pt-2 border-t">
            <button
              onClick={exportData}
              className="flex-1 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
            >
              Export Data
            </button>
            <button
              onClick={clearData}
              className="flex-1 px-3 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
            >
              Clear Data
            </button>
          </div>
          
          <div className="text-xs text-gray-500 text-center pt-2 border-t">
            Press Ctrl+Shift+A to toggle analytics
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
