import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';

class Signup extends Component {
 render() {
   return (
     <div className="Dashboard container-fluid">
       {/* <Switch>
         <Route path="/" exact={true} component={Login} />
         <Route path="/login"  component={Login} />
         <Route path="/signup" component={Signup} />
         <Route path="/dashboard" component={Dashboard} />
         <Route path="/profile/:id" component={Profile} />
         <Route path="/lesson/:id" component={Lesson} />
       </Switch> */}
     </div>
   );
 }
}

export default Signup;
