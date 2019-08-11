import React from 'react';
import { Switch, Route} from 'react-router-dom';
import SignIn from './Component/Auth/SignIn';
import SignUp from './Component/Auth/SignUp';

const Routes = () =>{
    return(
        <Switch>
            <Route exact path="/" component = {SignIn} />
            <Route  path="/SignUp" component = {SignUp} />
        </Switch>

    )
}
export default Routes;