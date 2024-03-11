import './navbar.css';
import { Outlet, Link } from "react-router-dom";

export default function NavBar() {
    return (
        <div className='navbar'>
            <h1>Hello there</h1>
            <div>
                <ul>
                    <li>
                        <Link to={`snake`}>Snake</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}