import './PageLayout.scss';
import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar/NavigationBar";


export default function GridLayout() {
    return (
        <div className="app-grid">
            <header className="app-grid__navigation">
                <NavigationBar/>
            </header>

            {/*could have an "aside" here for a sidebar if I wanted it.*/}

            <main className="app-grid__content">
                <Outlet />
            </main>

            <footer className="app-grid__footer">
                {/* TODO make the footer element */}
            </footer>

        </div>
    );
}