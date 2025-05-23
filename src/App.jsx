import { Routes, Route, useRoutes } from "react-router-dom";
import "modern-css-reset";
import './App.scss';
import { Suspense } from "react";
import { routes } from "./Routes";

function App() {

    return (
        <Suspense /*fallback={<LoadingSpinner>}*/>
            { useRoutes(routes) }
        </Suspense>
    );
}

export default App