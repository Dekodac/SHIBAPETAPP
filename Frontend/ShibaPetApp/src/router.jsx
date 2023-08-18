import { createBrowserRouter} from 'react-router-dom';
import App from './App';
import HomePage from './components/Homepage';
import AboutPage from './components/AboutPage';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
      
      const router = createBrowserRouter([
        {
          path: '/',
          element: <App />,
          // errorElement: <Error404Page/>,
          children: [
            {
              index: true,
              element: <HomePage />,
            },
            {
              path: '/about',
              element: <AboutPage />
            },
            {
              path: '/signup',
              element: <SignUpPage />
            },
            {
              path: '/login',
              element: <LoginPage />
            }
          ],
        },
      ],);
      
      export default router;
      