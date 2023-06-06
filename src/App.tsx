import { useRef, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import reactLogo from '@/shared/assets/react.svg';
import viteLogo from '@/shared/assets/vite.svg';
import { Comp } from '@/shared/ui';
import { ErrorFallback } from '@/shared/ui/error-fallback';

import './App.css';

/**
 *
 * @returns JSX.Element
 */
function App() {
  const [count, setCount] = useState(0);

  const ref = useRef<HTMLImageElement>(null);

  return (
    <ErrorBoundary fallbackRender={ErrorFallback} onReset={() => window.location.reload()}>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img ref={ref} src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button data-testid="test" type="button" onClick={() => setCount((num) => num + 1)}>
          count is
          {` ${count}`}
        </button>
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Comp>
        <p>text</p>
        test
      </Comp>
    </ErrorBoundary>
  );
}

export { App };
