import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Components/Routes/Routes.jsx';
import { UserProvider } from './Components/AuthContext/UserContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GoogleOAuthProvider } from '@react-oauth/google';

const CLIENT_ID = "918726058805-6dp5lekf5kk7lm1ivqto8bi03oh4a5n2.apps.googleusercontent.com"

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
        <RouterProvider router={router} />
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </UserProvider>
  </StrictMode>
);
