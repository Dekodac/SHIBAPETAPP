import { createBrowserRouter} from 'react-router-dom';
import App from './App';
import HomePage from './components/Homepage'
      
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
          ],
        },
      ],);
      
      export default router;
      