import React from 'react';
import './LoginPage.css';
import axios from 'axios';

class LoginPage extends React.Component{
    state={
        id:"",
        password:""
    }
    handleInputChange=(event)=>{
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]: value});
    }

    handleSubmit=async(event)=>{
        console.log("login req"+this.state.id);
        event.preventDefault();

        // async(){
            const {data} = await axios.post("http://127.0.0.1:3001/api/auth/login",
            {id:this.state.id,password:this.state.password});
            console.log(data);
            if(data.success){
                this.props.onSubmit();
            }else{
                console.log("fail");
                this.props.onSubmit();
            }
        // };
        
        
        // this.setState({id:this.state.id,password:this.state.password});
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit} >
                <img className="App-logo"src="img/Logo.png" alt=""/>

                <input name="id" type="text" placeholder="id" value={this.state.id} onChange={this.handleInputChange}/>
                <input name="password" type="password" placeholder="password" value={this.state.password} onChange={this.handleInputChange}/>
                <div id="btns">
                    <input type="submit" value="LOGIN" />
                    <input type="button" value="SIGN IN"/>
                </div>
            </form>
        )
    }
}



export default LoginPage;