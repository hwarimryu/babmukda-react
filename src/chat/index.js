import React from 'react';
import axios from 'axios';

import styled from 'styled-components';

class ChatPage extends React.Component{

    render(){
        
        return(
            <section className="container" style={{padding: "5vw"}}>
                <Menu>
                    <a href="http://127.0.0.1:3001/api/servicegp/item.id" style={{color: "black", fontWeight: "bold", textDecoration: "none"}}> item.title</a> | <a >닫기</a>
                </Menu>
                <ChatBox method="POST">
                    <ChatLog readonly>
                        <MyMessage><MyMessage__tooltip>haha</MyMessage__tooltip></MyMessage>
                        <MyMessage><MyMessage__tooltip>haha</MyMessage__tooltip></MyMessage>
                        <YouMessage ><YouMessage__tooltip>haha</YouMessage__tooltip></YouMessage>

                    </ChatLog>
                    <br/>
                    <Message rows="4" cols="53"></Message>
                    <Button>SEND</Button>
                </ChatBox>
            </section>
        )
    }
}
const Menu=styled.div`
    fontSize:"15pt"
`;
const ChatBox= styled.form`
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
export default ChatPage;