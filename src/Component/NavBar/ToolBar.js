import React from 'react';
import DrawerToggleButton from'../SideDrawer/DrawerToggleButton';
import './ToolBar.css'
// import { Link } from 'react-router-dom';


const toolBar = props => {
    return (
        <header className="toolbar">
            <nav  className="toolbar_navigation">
                <div className="toolbar_toggle-button">
                    <DrawerToggleButton click={props.drawerClickHandler}/>
                </div>
                <div className="toolbar_logo"><a href="/">LOGO</a></div>
                <div className="spacer"/>
                <div className="toolbar_navigation-items">
                    <ul>
                        <li><a href='/Booklist'>Book List</a></li>
                        <li><a href='/Profile'>Profile</a></li>
                        <li><a href='/'>Login</a></li>
                        <li><a href='/SignUp'>SignUp</a></li>
                        <li><a href='/Logout'>Logout</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default toolBar;
