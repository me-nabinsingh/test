import React from 'react';

const Footer = () => {
    const currentPath = window.location.pathname
    if(currentPath.includes('/admin') || currentPath.includes('/auth')) {
        return null;
    }
    
    return ( 
        <footer className="container py-5">
            <div className="row">
                <div className="col-12 col-md text-center">
                    &copy; Copyright 2018 All rights reserved.
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;