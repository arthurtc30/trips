import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reservas from './pages/Bookings';

export default function Routes() {
 return (
   <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/bookings" component={Reservas} />
   </Switch>
 );
}
