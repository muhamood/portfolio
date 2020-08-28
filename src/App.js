import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {LandingPage} from './components/landing';
import {Resume} from './components/resume';
import AboutMe from './components/aboutme';
import {Contact} from './components/contact';
import Navbar from './components/navbar';

 const App = () =>{
 	return(
   <Router>
    <div className ="App">
     <Navbar/>
     <Switch>
 	   <Route exact path ='/' component ={LandingPage}/>
         <Route path ='/resume' component ={Resume}/>
         <Route path ='/aboutme' component ={AboutMe}/>
         <Route path ='/contact' component ={Contact}/>
     </Switch>
    </div>
  </Router>
	);
	  }    
export default App;