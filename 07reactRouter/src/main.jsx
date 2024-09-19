import { createBrowserRouter, createRoutesFromChildren, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import { createRoot } from 'react-dom/client'
import './index.css'
import { StrictMode } from 'react';
import User from './components/User/User';
import Github, { githubInfoLoader } from './components/Github/Github';

// Option - 1
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about/',
//         element: <AboutUs />,
//       },
//       {
//         path: 'contact/',
//         element: <ContactUs />,
//       },
//     ],
//   },
// ]);

// Option - 2
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about/' element={<AboutUs />} />
      <Route path='contact/' element={<ContactUs />} />
      <Route path='user/:user_id' element={<User />} />
      <Route
        loader={githubInfoLoader}
        path='github/'
        element={<Github />}
      />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>

);
