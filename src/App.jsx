import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import { routes } from "./configuration/Routes";
import Loading from "./pages/Loading";


function App() {

    return (
        <Suspense fallback = {<Loading />}>
            { useRoutes(routes) }
        </Suspense>
    );
}

export default App