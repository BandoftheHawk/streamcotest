import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Movies from '../Pages/Movies';
import Series from '../Pages/Series';
const Content = () =>{
    return(
        <section className="main">
                <Switch>
                    <Route exact path="/"  component={() =>
                            <Home/>}
                        />
                        <Route path="/series" component={() =>
                            <Series />}
                        />
                        <Route path="/movies" component={() =>
                            <Movies />}
                        />
                </Switch>
        </section>
    )
}
export default Content;