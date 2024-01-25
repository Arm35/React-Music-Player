import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

const Layout = ({}) => {
    return (
        <>
        <header>
            <nav>
                <ul>
                    <li><Link to="/addsong">Add Song</Link></li>
                    <li><Link to="">SongList</Link></li>
                </ul>
            </nav>
        </header>
        <main> 
            <Outlet/> 
        </main>
        </>
    );
  };
  export default Layout;