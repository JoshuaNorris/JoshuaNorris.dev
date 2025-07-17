import { lazy } from 'react';

import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import PageLayout from '../PageLayout';

const AboutThisWebsite  = lazy(() => import('../pages/AboutThisWebsite'));
const Blog  = lazy(() => import('../pages/Blog'));
const Article  = lazy(() => import('../pages/Article'));


export const HOME_PATH = "/";
export const ABOUT_PATH = "/about-this-website";
export const BLOG_PATH = "/blog";
export const ARTICLE_PATH = BLOG_PATH + "/:title";

export const routes = [
    { 
        path : '',
        element : <PageLayout />,
        children : [
            { path : HOME_PATH, element: <Home/> },
            { path : ABOUT_PATH, element : <AboutThisWebsite/>},
            { path : BLOG_PATH, element : <Blog/>},
            { path : ARTICLE_PATH, element: <Article />},

            /* 404 CATCH ALL */
            { path : "*", element : <NotFound /> }
        ]
    }
];