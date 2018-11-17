import React from 'react';
import {NavLink} from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props){
      super(props);
      console.log("This is header props",props);
}
    
  render() {
    return (<div>
      <h2>Header</h2>
      <NavLink to="/">Header</NavLink>
      {' '}
       <NavLink to="/main">Main</NavLink>
      {' '}
      <NavLink to="/about">About</NavLink>
          <hr/> 
    </div>);
  }
}