import React from 'react';

class LoginPage extends React.Component{
    render(){
        return(
            <form action="" method="POST">
                <img class="App-logo"src="img/Logo.png" alt=""/>

                <input name="id" type="text" placeholder="id"/>
                <input name="password" type="password" placeholder="password"/>
                <div id="btns">
                    <input type="submit" value="LOGIN"/>
                    <input type="button" value="SIGN IN"/>
                </div>
            </form>
        )
    }
}



export default LoginPage;