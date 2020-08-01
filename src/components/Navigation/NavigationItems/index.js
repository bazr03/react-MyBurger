import React from 'react';

import classes from './NavItems.module.css';
import NavItem from './NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavItems} >
        <NavItem link="/" active >
            Burger Builder
        </NavItem>
        <NavItem link="/" >
            Checkout
        </NavItem>
    </ul>
);

export default navigationItems;
