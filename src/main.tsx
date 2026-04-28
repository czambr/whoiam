import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

import './app/shared/i18n/i18n.config';
import { router } from './app/router';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
    </StrictMode>,
);
