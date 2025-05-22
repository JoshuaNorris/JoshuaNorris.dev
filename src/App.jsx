import { Routes, Route, useRoutes } from "react-router-dom";
import "modern-css-reset";
import './App.scss';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Home from './pages/Home/Home';
import AboutThisWebsite from './pages/AboutThisWebsite/AboutThisWebsite';
import Blog from './pages/Blog/Blog';
import ImJosh from './pages/ImJosh/ImJosh';
import JoshCanHelpWith from './pages/JoshCanHelpWith/JoshCanHelpWith';
import JoshWantsHelpWith from './pages/JoshWantsHelpWith/JoshWantsHelpWith';
import NotFound from './pages/NotFound/NotFound';
import routes from "./Routes";
import { Suspense } from "react";

function App() {
    const routes = useRoutes( routes() );

    <Suspense /*fallback={<LoadingSpinner>}*/>
        return ( routes );
    </Suspense>
}

export default App