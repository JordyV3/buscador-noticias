import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo}) => {
    return (
       <nav className="nav-wrapper red accent-1 darken-3">
           <a href="#!" className="brand-logo center">{titulo}</a>
       </nav>
    );
};

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header
