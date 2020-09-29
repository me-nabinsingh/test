import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import  "./styles.css";

const Header = () => {
    const currentPath = window.location.pathname
    if(currentPath.includes('/admin') || currentPath.includes('/auth')) {
        return null;
    }
    return ( 
        <nav className="site-header sticky-top py-1">
            <div className="container d-flex flex-column flex-md-row justify-content-between">
                <Logo width={30} height={30} />
                <Link className="py-2 d-none d-md-inline-block" to="/admin/login">Admin</Link>
            </div>
        </nav>
    );
}
 
export default Header;