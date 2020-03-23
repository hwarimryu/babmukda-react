import React from 'react';
import {Link} from 'react-router-dom';
class GlobalNav extends React.Component{
   
    
    render(){
        // const {cur,onClick}=this.state;

        return(
            <div id="globalNav">


                <Link to="/"><img src="/img/home.png" width="30vw" alt="" /></Link>
                <Link to="/servicegp"><img src="/img/gp.png" width="35vw" alt=""/></Link>
                <Link to="/servicercp"><img src="/img/rcp.png" width="30vw" alt=""/></Link>
                <Link to="/mychat"><img src="/img/chat.png" width="30vw" alt=""/></Link>
                <Link to="/alarm"><img src="/img/alarm.png" width="30vw" alt=""/></Link>
                <Link to="/myinfo"><img src="/img/profile.png" width="30vw" alt=""/></Link>
            </div>
        )
    }
    
}


export default GlobalNav;