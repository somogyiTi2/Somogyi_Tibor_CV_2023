import React from 'react';
import References from './page/References';
import Certificate from './page/Certificate';
import AboutMe from './page/AboutMe';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './page/RootLayout';
import ReferencesDeailPage from './page/ReferencesDeailPage';
import ErrorPage from './page/ErrorPage';

const App = () => {

  const router = createBrowserRouter([{
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, element: <AboutMe/>
      },
      { path: '/references', element: <References /> },
      { path: '/references/:someid', element: <ReferencesDeailPage /> },
      { path: '/certificate', element: <Certificate /> },
    ]
  }])


  return (
    <RouterProvider router={router} />
  )
}

export default App;
