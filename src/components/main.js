import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {LandingPage} from 'landing';
import {Resume} from 'resume';
import {AboutMe} from 'aboutme';
import {Contact} from 'contact';

 const Main = () =>{
 	return(

              <Switch>

 	   <Route exact path ='/' component ={LandingPage}/>
         <Route path ='/' component ={Resume}/>
         <Route path ='/' component ={AboutMe}/>
         <Route path ='/' component ={Contact}/>
        </Switch>
	);
	  }    
export default Main;