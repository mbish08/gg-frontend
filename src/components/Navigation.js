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
            <NavLink to='/' exact style={link} activeStyle={{background: 'darkgreen'}}>Home</NavLink> {""}
            <NavLink to='/plant_groups' exact style={link} activeStyle={{background: 'darkgreen'}}>Current Plant Groups</NavLink> {""}
            <NavLink to='/plant_groups/new' exact style={link} activeStyle={{background: 'darkgreen'}}>Add a New Plant Group</NavLink>
        </div>
    );
}

export default Navigation;
