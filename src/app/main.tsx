import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '.././index.css';
import App from './App.tsx';
import { FormProvider } from '../features/registration/context/FormProvider.tsx';
import ThemeProvider from '../shared/theme/ThemeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <FormProvider>
        <App />
      </FormProvider>
    </ThemeProvider>
  </StrictMode>,
);
