import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reservas from './pages/Reservas';

export default function Routes() {
 return (
   <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/reservas" component={Reservas} />
   </Switch>
 );
}
