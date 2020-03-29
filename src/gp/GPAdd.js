import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './ItemAdd.css';
class ItemAdd extends React.Component{
    state={
        id:0,
        title:"",
        name:"", 
        price:0,
        addr:"",
        details:"", 
        photo:"",
        host:"",
        maxnum:0
    }
    render(){
        return(
            <section className="container">
                <Form  method="post" enctype="multipart/form-data">
                <Table><tbody>
                <Tr>
                    <Td td1>title</Td>
                    <Td  ><input name="title" type="text"/></Td>
                </Tr>
                <Tr>
                    <Td td1>name</Td>
                    <Td  ><input name="name" type="text"/></Td>
                </Tr>
                <Tr>
                    <Td td1>price</Td>
                    <Td  ><input name="price" type="text"/></Td>
                </Tr>
                <Tr>
                    <Td td1>address</Td>
                    <Td  ><input name="addr" type="text"/></Td>
                </Tr>
                <Tr>
                    <Td td1>인원수</Td>
                    <Td  ><input name="maxnum" type="text"/></Td>
                </Tr>

                <Tr>
                    <Td td1>picture</Td>
                    {/* style="vertical-align:top" */}
                    <Td colspan="2"  >
                        <input className="upload-name" value="파일선택" disabled="disabled"/>

                        <label for="ex_file">FIND</label>
                        <input type="file" name="image" accept="image/*" id="ex_file"
                            className="upload-hidden" multiple=""/>
                        <img src="/public/img/no_image.png" id="picture" alt="" className="upload-image"/>
                    </Td>
                </Tr>
                <Tr>
                    <Td td1 >detail</Td>
                    <Td  ><textarea cols="28" rows="8"></textarea></Td>
                </Tr>
                </tbody>
                </Table>
            <Buttons>
                <Button type="reset">
                    RESET
                </Button>
                <Button type="submit">
                    OK
                </Button>
                <Button type="button">
                    QUIT
                </Button>
            </Buttons>
        </Form>
        </section>
        )
    }
}

const Form = styled.form`
    padding-top: 10vw;
    padding-left: 5vw;
    width:100%;
    height:100%;
    
`;

const Table=styled.table`
    table-layout: fixed;
    margin:0;
    height: 80%;

`;


const Tr= styled.tr`
    height: 10vw;
`;
const Td = styled.td`
    height: 8vw;
    width:${props=>props.td1? "19vw":''};
`;
const Buttons= styled.div`
    position: absolute;
    right: 5vw;
    bottom: 5vw;
`;
const Button=styled.button`
    // position: relative;
    color: white;
    border: none;
    border-radius: 1.5vw;
    font-size: 3.5vw;
    background: rgb(99, 99, 99);
    padding: 1.8vw;
    margin-left:2vw;
`;
export default ItemAdd;

