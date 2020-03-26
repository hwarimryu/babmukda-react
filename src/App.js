import React from "react";
import {HashRouter, Route} from 'react-router-dom';
import Home from './routes/Home';
import GPPage from './gp';
import RCPPage from './rcp';
import Nav from './common/Nav';
import LoginPage from './common/LoginPage';
import MyPage from './myInfo';
import ChatPage from './chat';
import AlarmPage from './alarm';
import styled,{ createGlobalStyle } from 'styled-components';

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
  function App(){

    const isLogin=true;
    return(
    <HashRouter>
      <GlobalStyle/>
      <Nav />
      <Route path="/" exact component={
        isLogin ? (
                Home
            ) :
            (
                LoginPage
            )}></Route>
      <Route path="/servicegp" component={GPPage}/>
      <Route path="/servicercp" component={RCPPage}/>
      <Route path="/mychat" component={ChatPage}/>
      <Route path="/alarm" component={AlarmPage}/>
      <Route path="/myinfo" component={MyPage}/>
    </HashRouter>
    )
  }
export default App;