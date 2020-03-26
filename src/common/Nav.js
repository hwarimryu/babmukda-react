import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';


// import './NavigationGlobal.css'
function Nav(){
    const link_active={
        opacity: 1
    };
    const link={
        opacity:0.5
    }
        return(
            <Navbar id="globalNav">
                <NavLink to="/" exact style={link} activeStyle={link_active}><Img src="/img/home.png" width="30vw" alt="" /></NavLink>
                <NavLink to="/servicegp" style={link} activeStyle={link_active} ><Img src="/img/gp.png" width="35vw" alt=""/></NavLink>
                <NavLink to="/servicercp"  style={link} activeStyle={link_active} ><Img  src="/img/rcp.png" width="30vw" alt=""/></NavLink>
                <NavLink to="/mychat" style={link} activeStyle={link_active}><Img  src="/img/chat.png" width="30vw" alt=""/></NavLink>
                <NavLink to="/alarm" style={link} activeStyle={link_active}><Img   src="/img/alarm.png" width="30vw" alt=""/></NavLink>
                <NavLink to="/myinfo" style={link} activeStyle={link_active}><Img src="/img/profile.png" width="30vw" alt=""/></NavLink>
            </Navbar>
        )
    
}
const Navbar = styled.div`
    padding-top: 5vw;
    display: block;
    float: left;
    height:100vh;
    background-color: #dbf1d9;
    width: 18vw;
`;

const Img=styled.img`
    margin: 3vw;
    width: 12vw;
    height: 12vw;
    text-align: center;
    line-height: 18vw;
`



export default Nav;