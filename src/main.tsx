import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { reportWebVitals } from './utils/performance'

// Initialize performance monitoring
reportWebVitals();

// Create strict mode wrapper for development
const StrictModeWrapper = import.meta.env.DEV
  ? ({ children }: { children: React.ReactNode }) => <React.StrictMode>{children}</React.StrictMode>
  : ({ children }: { children: React.ReactNode }) => <>{children}</>;

// Render the app with error handling
const renderApp = () => {
  try {
    const rootElement = document.getElementById("root");
    if (!rootElement) throw new Error("Root element not found");

    const root = createRoot(rootElement);
    root.render(
      <StrictModeWrapper>
        <App />
      </StrictModeWrapper>
    );
  } catch (error) {
    console.error("Failed to render application:", error);
    // Display fallback UI for critical errors
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center;padding:20px;">
          <h1 style="color:#e11d48;font-size:24px;margin-bottom:16px;">Something went wrong</h1>
          <p style="color:#4b5563;margin-bottom:24px;">We're having trouble loading the application. Please try refreshing the page.</p>
          <button onclick="window.location.reload()" style="background:#2563eb;color:white;border:none;padding:8px 16px;border-radius:4px;cursor:pointer;">
            Refresh Page
          </button>
        </div>
      `;
    }
  }
};

// Initialize the app
renderApp();
