import React, {Component} from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom';
import ToolBar from './Component/NavBar/ToolBar'
import SideDrawer from './Component/SideDrawer/SideDrawer';
import Backdrop from './Component/Backdrop/Backdrop';
// import SignIn from './Component/Auth/SignIn';
// import SignUp from './Component/Auth/SignUp';

class App extends Component{
  state ={
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = ()=>{
    this.setState((prevState)=> {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () =>{
    this.setState({sideDrawerOpen: false})
  };

  render(){

    let backdrop;
    if (this.state.sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return(
      <div style={{height: '100%'}}>
        <ToolBar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show ={this.state.sideDrawerOpen}/>
        {backdrop}
        <main style={{marginTop: '64px'}}>
          <p>Helllloooooo</p>
        </main>

      </div>
    )
  }
}

export default App;
