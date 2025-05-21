import { Routes, Route } from "react-router-dom";
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

function App() {


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
    */


    return (
        <>
            <Routes>
                <Route path = "/" element={ <NavigationBar/> }>
                    
                    {/* PUBLIC ROUTES */}
                    <Route index element={ <Home/> } />
                    <Route path = "about-this-website" element={ <AboutThisWebsite/> } />
                    <Route path = "blog" element={ <Blog/> } />
                    <Route path = "im-josh" element={ <ImJosh/> } />
                    <Route path = "josh-can-help-with" element={ <JoshCanHelpWith/> } />
                    <Route path = "josh-wants-help-with" element={ <JoshWantsHelpWith/> } />

                    {/* PROTECTED ROUTES */}

                    {/* 404 CATCH ALL */}
                    <Route path = "*" element = {<NotFound />} />
                </Route>
            </Routes>
        </>
  )
}

export default App