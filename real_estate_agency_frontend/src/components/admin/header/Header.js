import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../components/logo/Logo';
import history from "../../../util/history";

class   Header extends Component {

    componentWillMount() {
        const token = localStorage.getItem('token');
        if(!token) {
            this._redirectToLogin();
        }
    }

    _redirectToLogin = () => {
        localStorage.clear();
        history.push('/auth/login');
    }

    _signOut = (e) => {
        e.preventDefault();
        this._redirectToLogin();
    }

    render() {
        return ( 
            <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
                <div className="mx-5 my-2">
                    <Logo />
                </div>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <Link to="#" className="nav-link" onClick={this._signOut}>Sign out</Link>
                    </li>
                </ul>
            </nav>
         );
    }
}
 
export default Header;