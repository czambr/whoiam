import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import ProjectDetail from '../pages/ProjectDetail';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                { index: true, element: <Home /> },
                { path: 'projects/:slug', element: <ProjectDetail /> },
                { path: '*', element: <NotFound /> },
            ],
        },
    ],
    {
        basename: import.meta.env.BASE_URL,
    }
);