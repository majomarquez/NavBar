import React from 'react'
import './SideDrawer.css'

const sideDrawer = props =>{
    let drawerClasses ='side-drawer'
    if(props.show){
        drawerClasses='side-drawer open';
    }
    return(
        <nav className={drawerClasses}>
            <ul>
                <li><a href='/Booklist'>Book List</a></li>
                <li><a href='/Profile'>Profile</a></li>
                <li><a href='/'>Login</a></li>
                <li><a href='/SignUp'>SignUp</a></li>
                <li><a href='/Logout'>Logout</a></li>
            </ul>
        </nav>
    )
};

export default sideDrawer;