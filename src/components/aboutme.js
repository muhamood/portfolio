import React from 'react';
import { CardActions, Card, CardTitle} from 'react-mdl';

const AboutMe = () =>{
     const styles = {
          color: 'black',
           fontSize: '35px',
            float:'right',
             fontWeight: '500', 
     }

    return(
        <div>
        <article className="info">
        <h1>About me page</h1>
        <p>Paul Stills is a Dutch photographer, originally from Amsterdam. He now resides in San Francisco,
         creating imagery for magazines and advertising, as well as pursuing his own art projects.
         Paul’s work has been in numerous awards including IPA, AOP, Campaigns Big Awards.</p>
        </article>
         
        
         <figure className ="image">
         <Card shadow={0} style={{width: '400px', height: '600px', float:'left', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover', margin: 'auto'}}>
    <CardTitle expand />
    <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
        <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
            Image.jpg
        </span>
    </CardActions>
</Card>
          </figure>
         </div>

    	)
};

export default AboutMe; 