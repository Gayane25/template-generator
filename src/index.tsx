import App from 'App';
import { AppProvider } from 'context/context';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(<AppProvider><App /></AppProvider>);
