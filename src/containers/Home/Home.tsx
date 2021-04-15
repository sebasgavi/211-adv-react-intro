import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { HomeName } from './HomeName';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {

  return <div>
    <h1>Home</h1>

    <Route path="/home" exact render={() => <p>Select a sub page</p>} />

    <Link to="/home/one">one</Link>
    <Link to="/home/two">two</Link>
    <Link to="/home/three">three</Link>

    <Route path="/home/one" render={() => <h2>one</h2>}/>
    <Route path="/home/two" render={() => <h2>two</h2>}/>
    <Route path="/home/three" render={() => <h2>three</h2>}/>

    <Route path="/home/:id" render={() => <HomeName />} />

  </div>;
}