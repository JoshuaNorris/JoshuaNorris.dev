import { lazy } from 'react';

import NotFound from './pages/NotFound/NotFound';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './pages/Home/Home';


// const Home              = lazy(() => import('./pages/Home/Home'));
const AboutThisWebsite  = lazy(() => import('./pages/AboutThisWebsite/AboutThisWebsite'));
const Blog              = lazy(() => import('./pages/Blog/Blog'));
const ImJosh            = lazy(() => import('./pages/ImJosh/ImJosh'));
const JoshCanHelpWith   = lazy(() => import('./pages/JoshCanHelpWith/JoshCanHelpWith'));
const JoshWantsHelpWith = lazy(() => import('./pages/JoshWantsHelpWith/JoshWantsHelpWith'));

export default function routes() {
    return [
        { 
            path : '/',
            element : <NavigationBar />,
            children : [
                { index: true, element: <Home/> },
                { path : "about-this-website", element : <AboutThisWebsite/>},
                { path : "blog", element : <Blog/> },
                { path : "im-josh", element : <ImJosh/> },
                { path : "josh-can-help-with", element : <JoshCanHelpWith/> },
                { path : "josh-wants-help-with", element : <JoshWantsHelpWith/> },

                /* PROTECTED ROUTES */

                /* 404 CATCH ALL */
                {path : "*", element : <NotFound /> }
            ]
        }
    ];
}

    /*
    Could have a isLogged in check here...

        function PrivateLayout() {
        const isAuthed =  your auth check ;
        return isAuthed
            ? <Outlet />                          // renders child routes
            : <Navigate to="/login" replace />;  // redirect if not logged in
        }

    could then have something like

    <Route element={<PrivateLayout />}>
        <Route path="profile" element={<Profile />} />
        other auth-only pages
    </Route>



    const routes = [
  { path: '/',       element: <Home /> },
  { path: 'about',   element: <About /> },
  { path: 'login',   element: <Login /> },
  {
    element: <PrivateLayout />,
    children: [
      { path: 'profile', element: <Profile /> },
      // …
    ]
  },
  { path: '*', element: <NotFound /> },
];
    */