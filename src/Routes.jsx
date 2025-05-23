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


export const HOME_PATH = "/";
export const ABOUT_PATH = "/about-this-website";
export const BLOG_PATH = "/blog";
export const IM_JOSH_PATH = "/im-josh";
export const JOSH_CAN_HELP_PATH = "/josh-can-help-with";
export const JOSH_WANTS_HELP_PATH = "/josh-wants-help-with";

export const routes = [
    { 
        path : '',
        element : <NavigationBar />,
        children : [
            { path : HOME_PATH, element: <Home/> },
            { path : ABOUT_PATH, element : <AboutThisWebsite/>},
            { path : BLOG_PATH, element : <Blog/> },
            { path : IM_JOSH_PATH, element : <ImJosh/> },
            { path : JOSH_CAN_HELP_PATH, element : <JoshCanHelpWith/> },
            { path : JOSH_WANTS_HELP_PATH, element : <JoshWantsHelpWith/> },

            /* PROTECTED ROUTES */

            /* 404 CATCH ALL */
            {path : "*", element : <NotFound /> }
        ]
    }
];

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