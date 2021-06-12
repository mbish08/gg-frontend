import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    background: 'green',
    textDecoration: 'none',
    color: 'white'
}

const Navigation = () => {
    return (
        <div>
            <NavLink to='/' exact style={link} activeStyle={{background: 'darkgreen'}}>Home</NavLink>
        </div>
    );
}

export default Navigation;
