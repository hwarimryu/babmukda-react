import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


function Item ({id,image,title,name,time,host}){
        return(
            <ItemBox href='/servicegp/item.id'>
                {/* <div class="content"> */}
                    <Img src="image/name=" alt=""/>
                    <TextBox >
                        <Title name="title">{title}</Title>
                        <Time small name="time"><img src="../img/rcp_timer.png" height="100%" alt=""/> {time}</Time>
                        <Host small name="host">{host}</Host>
                    </TextBox>
                {/* </div> */}
            </ItemBox>
        )
    
};

Item.propTypes= {
    id:PropTypes.number.isRequired,
    image:PropTypes.string,
    title:PropTypes.string.isRequired,
    time:PropTypes.number.isRequired,
    host:PropTypes.string.isRequired
}

const ItemBox=styled.a`
    position: relative;
    margin-bottom: 8vw;
    height: 30vh;
`

const Img= styled.img`
    width: 95%;
    height: 80%;
    float: left;
    object-fit:cover;
    overflow: hidden;
    border-radius: 3px;
`

const TextBox = styled.div`
    margin-top: 1.5vw;
    width: 100%;
`
const Title=styled.div`
    padding: 0vw 2vw 0vw 0vw;
    font-size: 6vw;
`;
const Host = styled.div`
    display:inline-block;
    margin-top:3vh;
    width: 50%;
    text-align:right;
    font-size: 4vw;
`;
const Time= styled.div`
    display:inline-block;
    margin-top:3vh;
    width: 50%;
    vertical-align: top;
    line-height: 4vw;
    font-size: 4vw;
`;
// .content img {
//     width: 4vw;
//     display: inline-block;
// }
// const TextContent = styled.div`
//     padding: 3vw 2vw 2vw 3vw;
//     font-size:${props=>props.small ? " 3.5vw" : " "};
//     float: ${props=>props.small ? "left" : " "};
    
// `


export default Item;