import React from 'react';

import Logo from '../../Logo';
import NavItems from '../NavigationItems';
import classes from './SideDrawer.module.css';

const sideDrawer = (props) => {
    return (
        <div className={classes.SideDrawer} >
            <div className={classes.Logo} >
                <Logo />
            </div>
            <nav>
                <NavItems />
            </nav>
        </div>
    )
}

export default sideDrawer;
