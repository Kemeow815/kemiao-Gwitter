import gwitter from 'gwitter';
import 'gwitter/dist/gwitter.min.css';
import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { GwitterConfig, config } from './config/gwitter.config';

function App() {
  const [currentConfig, setCurrentConfig] = useState<GwitterConfig>(config);
  const [currentConfigKey, setCurrentConfigKey] = useState('personal-blog');
  const [gwitterInstance, setGwitterInstance] = useState<any>(null);

  const initializeGwitter = useCallback((config: GwitterConfig) => {
    // Defer DOM manipulation to avoid synchronous unmount during rendering
    setTimeout(() => {
      try {
        // Clear previous instance if exists
        const container = document.getElementById('gwitter-container');
        if (container) {
          container.innerHTML = '';
        }

        // Initialize new Gwitter instance
        const instance = gwitter({
          container: document.getElementById('gwitter-container'),
          config,
        });

        setGwitterInstance(instance);
      } catch (error) {
        console.error('Failed to initialize Gwitter:', error);
        const container = document.getElementById('gwitter-container');
        if (container) {
          container.innerHTML = `
            <div style="padding: 40px; text-align: center; color: #666;">
              <h3>⚠️ Configuration Error</h3>
              <p>Please check your GitHub configuration and try again.</p>
              <p><strong>Error:</strong> ${
                error instanceof Error ? error.message : 'Unknown error'
              }</p>
            </div>
          `;
        }
      }
    }, 0);
  }, []);

  const handleConfigChange = useCallback(
    (newConfig: GwitterConfig) => {
      setCurrentConfig(newConfig);
      initializeGwitter(newConfig);
    },
    [initializeGwitter],
  );

  useEffect(() => {
    initializeGwitter(currentConfig);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🐦 Gwitter NPM Demo</h1>
        <p>
          This is a demonstration of Gwitter using NPM installation in a React
          project with TypeScript.
        </p>
        <p>
          Try different configuration presets below, then update the GitHub
          credentials in
          <code>src/config/gwitter.config.ts</code> with your actual repository
          details.
        </p>
      </header>

      <main className="App-main">
        <div className="demo-info">
          <h2>📋 Current Configuration</h2>
          <div className="config-display">
            <div className="config-item">
              <strong>Owner:</strong> {currentConfig.request.owner}
            </div>
            <div className="config-item">
              <strong>Repository:</strong> {currentConfig.request.repo}
            </div>
            <div className="config-item">
              <strong>Page Size:</strong> {currentConfig.request.pageSize}
            </div>
            <div className="config-item">
              <strong>Only Show Owner:</strong>{' '}
              {currentConfig.app?.onlyShowOwner ? 'Yes' : 'No'}
            </div>
            <div className="config-item">
              <strong>Enable About:</strong>{' '}
              {currentConfig.app?.enableAbout ? 'Yes' : 'No'}
            </div>
          </div>
        </div>

        <div id="gwitter-container" className="gwitter-demo-container"></div>
      </main>

      <footer className="App-footer">
        <div className="footer-links">
          <a
            href="https://github.com/SimonAKing/Gwitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            📚 Gwitter Repository
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
