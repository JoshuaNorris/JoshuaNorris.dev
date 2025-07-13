import { Routes, Route, useRoutes } from "react-router-dom";
import "modern-css-reset";
// import './App.scss';
import { Suspense } from "react";
import { routes } from "./configuration/routes";
import Loading from "./pages/Loading/Loading";


function App() {

    return (
        <Suspense fallback = {<Loading />}>
            { useRoutes(routes) }
        </Suspense>
    );
}

export default App