import React from 'react'
import PropTypes from 'prop-types';
const Header = props =>{
    const {branding}=props;
     return (

        <nav className='nav navbar navbar-expand-lg  navbar-dark bg-black mb-3 py-0'>
            <div className='container'>
            <a href='#' className='navbar-brand'>{branding}</a>
            <div>
                <ul className="navbar-nav mr-auto">
                    <li className='nav-item'>
                        <a href='www.google.com' className='nav-link'> home </a>
                    </li>
                    <li>


                        </li>

                </ul>

            </div>
            </div>
        </nav>
     )
     
     
};
Header.propTypes={

    branding:PropTypes.string.isRequired
};


export default Header;