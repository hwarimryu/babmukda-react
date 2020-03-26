import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


function Item ({id,image,title,name,reqnum,maxnum,date}){
        return(
            <ItemBox href='http://127.0.0.1:3000/api/servicegp/item.id'>
                {/* <div class="content"> */}
                    <Img src="image/name=" alt=""/>
                    <TextBox >
                        <TextContent name="title">{title}</TextContent>
                        <TextContent name="name">{name}</TextContent>
                        <TextContent small name="state">{reqnum} / {maxnum}</TextContent>
                        <TextContent small name="date">{date}</TextContent>
                    </TextBox>
                {/* </div> */}
            </ItemBox>
        )
    
};

Item.propTypes= {
    id:PropTypes.number.isRequired,
    image:PropTypes.string,
    title:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    reqnum:PropTypes.number.isRequired,
    maxnum:PropTypes.number.isRequired,
    date:PropTypes.number.isRequired
}

const ItemBox=styled.a`
    margin-bottom: 5vw;
    height: 18vh;
    color: black;
`

const Img= styled.img`
    width: 45%;
    height: 45%;
    float: left;
    overflow: hidden;
    border-radius: 3px;
`

const TextBox = styled.div`
    float: left;
`
const TextContent = styled.div`
    padding: 3vw 2vw 2vw 3vw;
    font-size:${props=>props.small ? " 3.5vw" : " "};
    float: ${props=>props.small ? "left" : " "};
    
`


export default Item;