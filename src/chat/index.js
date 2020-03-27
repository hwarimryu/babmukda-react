import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class ChatPage extends React.Component{

    cancleTrust=()=>{
        return;
    }
    checkChatType=(item)=>{
        if(item.state===2) {
            return(
                <tr><td onclick="window.location='/servicegp/<%=item.gpid%>'">{item.title}</td>
                <td onclick="trustFunc(<%=item.rid%>)">신뢰도 평가하기</td></tr>
            );
        }else if(item.host===item.member){
            return(
            <tr><td onclick="window.location='/servicegp/<%=item.gpid%>'">{item.title}</td>
                <td onclick="window.location='/chat/<%=item.rid%>'">CHAT 가기</td></tr>
            );
        }else{
            return(
            <tr><td onclick="window.location='/servicegp/<%=item.gpid%>'">{item.title}</td>
                <td onclick="window.location='/chat/<%=item.rid%>'">CHAT 가기</td>
                <td onclick="window.location='/servicegp/cancle_gp/<%=item.rid%>'">CHAT 종료</td></tr>
            );
        }
    }
    render(){
        
        return(
            <section className="container" style={{padding: "5vw"}}>
                <h1>채팅방</h1>
                <ChatList>
                <tr><ChatTd onclick="window.location='/servicegp/<%=item.gpid%>'">title1</ChatTd>
                <ChatTd onclick="trustFunc(<%=item.rid%>)">신뢰도 평가하기</ChatTd></tr>
                <tr><ChatTd onclick="window.location='/servicegp/<%=item.gpid%>'">title2</ChatTd>
                <ChatTd onclick="window.location='/chat/<%=item.rid%>'">CHAT 가기</ChatTd></tr>
                <tr><ChatTd onclick="window.location='/servicegp/<%=item.gpid%>'">title3</ChatTd>
                <ChatTd onclick="window.location='/chat/<%=item.rid%>'">CHAT 가기</ChatTd>
                <ChatTd onclick="window.location='/servicegp/cancle_gp/<%=item.rid%>'">CHAT 종료</ChatTd></tr>
                    {/* {data.map(item=>{ this.checkChatType(item);})} */}
                </ChatList>

                <TrustForm id="trustForm" action="/trust_success" method="post">
                <TrustButton type="submit" >완료</TrustButton>
                <TrustButton cancle="true" type="button" onclick="cancleTrust()" >취소</TrustButton>
                </TrustForm>
            </section>
        )
    }
}
const ChatList= styled.table`
    width:100%;
`

const ChatTd=styled.td`
    font-size: 4vw;
    font-weight: bold;
    overflow:hidden;
    text-align: center;
`;
const TrustForm= styled.form`
    display: none;
    position: fixed;
    padding: 10vw 5vw;
    width: 70%;
    height: 30%;
    background: #deece0;
    top: 55vw;
    color: #000000;
`;
const TrustTd= styled.td`
    padding: 0 40px 0 0 !important;
    text-align: center;
`;
 
const TrustButton= styled.button`
    background: none;
    color: black;
    font-size: 6vw;
    font-weight: bold;
    border: none;
    position: absolute;
    ${props=>props.cancle? "left":"right"}: 5vw;
    top: 35vw;
    width: 15vw;
`;

export default ChatPage;