import React,{useContext,useEffect} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import {Store} from './store';
import NavBar from './components/partials/NavBar';
import LandingPage from './components/pages/LandingPage'
import HomePage from './components/pages/HomePage';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import SecureScan from './components/authentication/SecureScan';

const App=()=>{
  const {dispatch}=useContext(Store);

  useEffect(()=>{
    if(localStorage.jwtToken){
      const token=localStorage.jwtToken;
      const decoded=jwt_decode(token);
      const currentTime=Date.now()/1000;
    }
  },[dispatch]);

  return(
    <Router>
      <div className='App'>
        <NavBar/>        
        <Route exact path='/' component={LandingPage}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/hompage' component={HomePage}/>
        {/* <Switch>
          <SecureScan exact path='/hompage' component={HomePage}/>
        </Switch> */}
      </div>      
    </Router>
  );
}
export default App;