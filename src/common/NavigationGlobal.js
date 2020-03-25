import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';


// import './NavigationGlobal.css'
class GlobalNav extends React.Component{
   
    
    render(){
        // const {cur,onClick}=this.state;

        return(
            <Navbar id="globalNav">
                <Link to="/"><Img on="true" src="/img/home.png" width="30vw" alt="" /></Link>
                <Link to="/servicegp"><Img src="/img/gp.png" width="35vw" alt=""/></Link>
                <Link to="/servicercp"><Img src="/img/rcp.png" width="30vw" alt=""/></Link>
                <Link to="/mychat"><Img src="/img/chat.png" width="30vw" alt=""/></Link>
                <Link to="/alarm"><Img src="/img/alarm.png" width="30vw" alt=""/></Link>
                <Link to="/myinfo"><Img src="/img/profile.png" width="30vw" alt=""/></Link>
            </Navbar>
        )
    }
    
}
const Navbar = styled.div`
    padding-top: 5vw;
    display: block;
    float: left;
    height: 100vh;
    background-color: #dbf1d9;
    width: 18vw;
`;
const Img=styled.img`
    margin: 3vw;
    width: 12vw;
    height: 12vw;
    text-align: center;
    line-height: 18vw;
    opacity: ${props=>props.on ? 1:0.5};
`


export default GlobalNav;