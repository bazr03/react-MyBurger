import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo';
import NavItems from '../NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar} >
        <div>MENU</div>
        <div className={classes.Logo} >
            <Logo />
        </div>
        <nav>
            <NavItems />
        </nav>
    </header>
);

export default toolbar;
