
import React from 'react';
import {MainA} from './MainA';
import {MainB} from './MainB';
import {MainC} from './MainC';
import { NavLink, Route, Redirect} from 'react-router-dom';

export const Main =({match})=>{
  return (<div className="row">
  <div className="col-lg-2 " style={{
    height:'250px',
    border:'0.5px solid #ffc600',
    background:'#193549',
    margin:'0px auto'
  }}>  
  <h2>Main</h2>
  <hr/>    
  <ul className="list-group">
    <li className="list-group-item list-group-item-info">
    <NavLink to={`${match.url}/maina`}>MainA</NavLink>
    </li>
    <li className="list-group-item list-group-item-info ">
    <NavLink to={`${match.url}/mainb`}>MainB</NavLink>
    </li>
    <li className="list-group-item list-group-item-info ">
    <NavLink to={`${match.url}/mainc`}>MainC</NavLink>
    </li>
    </ul>
    </div>
    <div className="col-lg-9" style={{
      height:'250px',
      border:'1px solid #ffc600',
      background:'#0a2a3fd2',
      margin:'0px auto'
    }}>
    
    <Route path={`${match.path}/maina`} render={()=>(<MainA/>)}/>
    <Route path={`${match.path}/mainb`} render={()=>(<MainB/>)}/>
    <Route path={`${match.path}/mainc`} render={()=>(<MainC/>)}/>

</div>   
      
      </div>);
}  