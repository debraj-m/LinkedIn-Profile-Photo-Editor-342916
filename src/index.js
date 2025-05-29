import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// This section demonstrates accessing environment variables.
// In a Create React App (CRA) project, environment variables prefixed with REACT_APP_
// are automatically embedded into the `process.env` object during the build process.
// These variables should be defined in your Netlify build settings (UI or netlify.toml).

// Example: Log environment variables for debugging or informational purposes.
// It's good practice to only log these in development or if a specific debug flag is set.
if (process.env.NODE_ENV === "development" || process.env.REACT_APP_DEBUG_LOGS === "true") {
  console.log("Netlify Environment Variables Check:");
  console.log(`  - NODE_ENV: ${process.env.NODE_ENV}`);
  console.log(`  - REACT_APP_VERSION: ${process.env.REACT_APP_VERSION}`); // Example custom variable
  console.log(`  - REACT_APP_ENVIRONMENT: ${process.env.REACT_APP_ENVIRONMENT}`); // e.g., 'production', 'staging', 'dev'
  console.log(`  - REACT_APP_API_BASE_URL: ${process.env.REACT_APP_API_BASE_URL}`); // e.g., your API endpoint
  
  // For Netlify-specific build variables like CONTEXT, URL, etc.,
  // you need to expose them as REACT_APP_ variables in your Netlify build settings
  // or netlify.toml. For example, in netlify.toml:
  // [build.environment]
  //   REACT_APP_NETLIFY_CONTEXT = "$CONTEXT"
  //   REACT_APP_SITE_URL = "$URL"
  console.log(`  - REACT_APP_NETLIFY_CONTEXT: ${process.env.REACT_APP_NETLIFY_CONTEXT}`); 
  console.log(`  - REACT_APP_SITE_URL: ${process.env.REACT_APP_SITE_URL}`);
}

// These environment variables can be used throughout your application, for example,
// to configure API clients, feature flags, or other environment-specific settings.
// A common pattern is to have a dedicated config file (e.g., src/config.js)
// that exports these values for easy consumption by other modules.

// Create a root element for the React application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component within StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);