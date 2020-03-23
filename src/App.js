import React from "react";
import {HashRouter, Route} from 'react-router-dom';
import Home from './routes/Home';
import GPPage from './gp';
import RCPPage from './rcp';
import NavigationGlobal from './common/NavigationGlobal';
import LoginPage from './common/LoginPage';
/*
Route의 props: {screen, url}
*/ 
  function App(){

    const isLogin=true;
    return(
    <HashRouter>
      <NavigationGlobal />
      <Route path="/" exact="true" component={
        isLogin ? (
                Home
            ) :
            (
                LoginPage
            )}></Route>
      <Route path="/servicegp" component={GPPage}/>
      <Route path="/servicercp" component={RCPPage}/>

    </HashRouter>
    )
  }
export default App;