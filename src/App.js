import React from "react";
import {HashRouter, Route} from 'react-router-dom';

// import {logIn} from './auth/auth'
import Home from './routes/Home';
import GPPage from './gp';
import GPAdd from './gp/GPAdd';
import GPDetail from './gp/GPDetail';

import RCPPage from './rcp';
import Nav from './common/Nav';
import LoginPage from './common/LoginPage';
import MyPage from './myInfo';
import ChatPage from './chat';
import AlarmPage from './alarm';
import styled,{ createGlobalStyle } from 'styled-components';

// import 
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing:border-box;
  }
  html,body{
    padding:0;
    margin:0;
    height:100vh;
    width:100vw;
  }

  .container {
    height:100vh;
    display: block;
    float: left;
    width: 82vw;
    background-color: #fffadf;
    overflow: auto;
  }
  .content-box {
    height: 35vh;
    padding: 5vw 4vw;
    /* overflow: auto; */
}
`;

/*
Route의 props: {screen, url}
*/ 
class App extends React.Component{

    state={ isLogin:false};
    checkCookie=()=>{
      if(document.cookie.match('(^|;) ?username([^;]*)(;|$)')){
        return true;
      }
// 추가하기.
    };
    componentWillMount(){
      if(this.checkCookie()){
        this.state.isLogin=true;
      }
    }
    render(){

    
    return(
    
      this.state.isLogin ? (
        <HashRouter>
        <GlobalStyle/>
        <Nav/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/servicegp" exact component={GPPage}/>
        <Route path="/servicegp/put" component={GPAdd}/>
        <Route path="/servicegp/detail/:id" component={GPDetail}/>
  
        <Route path="/servicercp" component={RCPPage}/>
        <Route path="/mychat" component={ChatPage}/>
        <Route path="/alarm" component={AlarmPage}/>
        <Route path="/myinfo" component={MyPage}/>
        </HashRouter>
        ) :(
            <LoginPage onSubmit={function(user_id,user_name){
              this.setState({isLogin:true});
              document.cookie="user_id="+user_id+"; user_name="+user_name;

            }.bind(this)}/>
          )
    )
          }
  }
export default App;