import React from 'react';
import { createRoot } from 'react-dom/client';
import { typography } from './reference/shared/styles';

// Just a dummy rendering to ensure React mounts successfully in dev mode
const App = () => (
  <div style={{ fontFamily: typography.type.primary, padding: '2rem' }}>
    <h1>T-Design-System Development</h1>
    <p>Components are successfully loaded in Vite development server.</p>
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
