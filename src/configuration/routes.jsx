import { lazy } from 'react';

import NotFound from '../pages/NotFound/NotFound';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Home from '../pages/Home/Home';

const AboutThisWebsite  = lazy(() => import('../pages/AboutThisWebsite/AboutThisWebsite'));
const Blog  = lazy(() => import('../pages/Blog/Blog'));


export const HOME_PATH = "/";
export const ABOUT_PATH = "/about-this-website";
export const BLOG_PATH = "/blog";

export const routes = [
    { 
        path : '',
        element : <NavigationBar />,
        children : [
            { path : HOME_PATH, element: <Home/> },
            { path : ABOUT_PATH, element : <AboutThisWebsite/>},
            { path : BLOG_PATH, element : <Blog/>},

            /* 404 CATCH ALL */
            { path : "*", element : <NotFound /> }
        ]
    }
];