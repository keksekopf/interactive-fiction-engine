import React from 'react';
import ReactDOM from 'react-dom/client';
import StoryRenderer from './components/StoryRenderer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoryRenderer />
  </React.StrictMode>
);