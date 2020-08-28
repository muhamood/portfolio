import React from 'react';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div style={{height: '70px', position: 'relative'}}>
    <Layout style={{backgroundColor: 'lightgrey'}}>
        <Header transparent title="Title" style={{color: 'white'}}>
            <Navigation>
            <Link to ='/landing'>
                <a>Landing Page</a>
            </Link>    
                <Link to ='/resume'>
                <a>Resume</a>
                </Link>
                <Link to ='/aboutme'>
                <a>About Me</a>
                </Link>
                <Link to ="./contact">
                <a>Contact</a>
                </Link>
            </Navigation>
        </Header>
        <Content />
    </Layout>
</div>
  );
}

export default Navbar;
