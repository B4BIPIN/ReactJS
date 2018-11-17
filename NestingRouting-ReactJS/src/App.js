import React from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Home from './components/Home'
import {Main} from './components/Main';
import About from './components/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


export default class App extends React.Component{
  
  render(){
  
    
    return(
      <div className="container ">
    
      <div className="jumbotron" style={{background:'#193549'}}>
          <h1>Root Component</h1>
          <hr></hr>
         <Home />
          <Switch>
          <Route exact  path="/"  render={(props)=>((<h2>Home</h2>))}/>
          <Route  path="/main" component={Main} > 
              // Other things go to Main
          </Route>
          <Route path="/about" render={(props)=>(<h2>About</h2>)}/>                 
          </Switch>
          <hr></hr>
          <About className={About}/>
          </div>
         
        </div>);
  }
}