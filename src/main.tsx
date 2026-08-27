import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import './styles/tokens.css';
import './styles/global.css';
import './styles/stage075ContinuousAction.css';
import './styles/stage075PlayerActionCausality.css';
import './styles/stage075PrevisualHarness.css';
import './styles/stage075ResponsiveComposition.css';
import './styles/stage075PrevisualPortrait.css';
import './styles/stage075RasterMedia.css';
import './styles/stage075AnchorReview.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element #root was not found.');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
