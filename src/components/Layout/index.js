import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './layout.module.css';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';


const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <main className={classes.Content} >
            {props.children}
        </main>
    </Aux>
);

export default layout;