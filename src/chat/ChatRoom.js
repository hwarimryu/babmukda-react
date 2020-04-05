import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import socketio from 'socket.io-client';
const socket = socketio.connect('http://localhost:3001');

class ChatForm extends React.Component{
    state={
        writer:'test_host',
        content:'test~~'
    }
    handelContentChange=(event)=>{
        this.setState({content:event.target.value})
    }
    send=()=>{
        socket.emit('chat_msg',{
            writer:this.state.writer,
            content:this.state.content
        })
    }
   
    render(){
        return(
            <>
            <Message onChange={this.handelContentChange} rows="4" cols="53"/>
            <Button onClick={this.send}>SEND</Button>   
            </>
        )
    }
}
class ChatRoom extends React.Component{

    state={
        history:[],
        title:'',
        gpid:-1, 
        room_id: 1,//this.props.id,

    }
    openChatRoom= async ()=>{
        const {data:{history,title,gpid}}=await axios.get("http://127.0.0.1:3001/chat/"+this.state.room_id);
        this.setState({history,title,gpid});
    }

    componentDidMount(){
        this.openChatRoom();
        socket.on('chat_msg', (data)=>{
            console.log(data.writer);
            const tmp= this.state.history;
            tmp.push(data);
            this.setState({history:tmp})
        })
    }

    render(){
        
        return(
            <section className="container" style={{padding: "5vw"}}>
                <Menu>
                <a href="http://127.0.0.1:3001/api/servicegp/item.id" style={{color: "black", fontWeight: "bold", textDecoration: "none"}}> {this.state.title}</a> | <a >닫기</a>
                </Menu>
                    <ChatLog readonly>
                        {
                            this.state.history.map(item=>{
                                if(item.writer=='test_host') 
                                    return <MyMessage key={item.id}><MyMessage__tooltip>{item.content}</MyMessage__tooltip></MyMessage>;
                                else{
                                    return <YouMessage>test_guest<YouMessage__tooltip>{item.content}</YouMessage__tooltip></YouMessage>;
                                }
                            })
                        }
                    </ChatLog>
                    <br/>
                    <ChatForm/>
                    
            </section>
        )
    }
}
const Menu=styled.div`
    fontSize:"15pt"
`;

const ChatLog= styled.pre`
    padding: 5vw;
    background-color: white;
    width: 100%;
    height: 70vh;
    border-radius: 5vw;
    overflow:auto;
`;
const Message= styled.textarea`
    width: 75%;
    height: 66px;
    border-radius: 10px;
    margin-right: 1%;
`;

const Button=styled.button`
    vertical-align: top;
    border: none;
    height: 20vw;
    background: none;
    font-size: 5.0vw;
    font-weight: bold;
`;

const MyMessage=styled.li`
list-style-type:none;
    position: relative;
    width: 100%;
    min-height: 8vh;
`;
const MyMessage__tooltip=styled.div`
    position: absolute;
    background: #ffd381;
    right: 1vw;
    border-radius: 1vw;
    padding: 1vw 2vw;
    color: black;
    font-size: 5vw;
    text-align: right;  
`;
const YouMessage=styled.li`
    list-style-type:none;
    position: relative;
    width: 100%;
    min-height: 8vh;
`;
const YouMessage__tooltip=styled.div`
    position: absolute;
    background: #bee6c4;
    left: 1vw;
    border-radius: 1vw;
    padding: 1vw 2vw;
    color: black;
    font-size: 5vw;
    text-align: left;  
`;
/*
#chatLog li {
        top: 5vw;
        height: 10vw;
    }
    .my_message {
        position: relative;
        width: 100%;
        height: auto;
    }
    article {
        padding: 5vw;
    }
    .my_message>.tooltip {
        position: absolute;
        background: #ffd381;
        right: 3vw;
        border-radius: 1vw;
        padding: 1vw 2vw;
        color: black;
        font-size: 5vw;
        text-align: right;
    }
    .you_message {
        position: relative;
        width: 100%;
        height: auto;
    }
    .you_message>.tooltip {
        position: absolute;
        background: #bee6c4;
        left: 3vw;
        border-radius: 1vw;
        padding: 1vw 2vw;
        color: black;
        font-size: 5vw;
        text-align: left;
    }
     */
export default ChatRoom;