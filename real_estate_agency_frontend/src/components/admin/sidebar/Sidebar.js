import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';


const Sidebar = () => {
    return ( 
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
          <div className="sidebar-sticky  mt-5">
            <ul className="nav flex-column py-2">
              <li className="nav-item">
                <Link className="nav-link" to="/admin/">
                  Dashboard 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/banners">
                  Banners
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/planets">
                  Planets
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin/images">
                  Images
                </Link>
              </li>
            </ul>

          </div>
        </nav>
     );
}
 
export default Sidebar;