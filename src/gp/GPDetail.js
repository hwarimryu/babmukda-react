import React from 'react';
import axios from 'axios';
// import './GPDetail.css';
import styled from 'styled-components';
class GPDetail extends React.Component{
    state={
        isLoading:true,
        id:this.props.match.params.id,
        item:{
            id: 0,
            title: "",
            name: "오렌지",
            price: 5000,
            addr: "상암",
            image: "orange.png",
            reqnum: 3,
            maxnum: 5,
            date: 200326,
            host: "hwarim",
            details: "오렌쥐~~~~~~~~"
        }
    };
    getGPItem=async(id)=>{
        const {data:{data:gpItem}}=await axios.get("http://127.0.0.1:3001/api/servicegp/id="+{id});
        this.setState({isLoading:false,item:gpItem});
        console.log(gpItem);
    };
    
    componentDidMount() {
        this.getGPItem(this.state.id);
    };




    render(){
        const item=this.state.item;
        return(
            <section className="container">
                <div className="content-box">
                <h1>{item.title}</h1>
                <Table><tbody>
                <Tr>
                    <Td td1>name</Td>
                    <Td >{item.name}</Td>
                </Tr>
                <Tr>
                    <Td td1>price</Td>
                    <Td >{item.price}</Td>
                </Tr>
                <Tr>
                    <Td td1>address</Td>
                    <Td >{item.addr}</Td>
                </Tr>
                <Tr>
                    <Td td1>req</Td>
                    <Td >{item.reqnum} /{item.maxnum}</Td>
                </Tr>
                <Tr>
                    <Td td1>date</Td>
                    <Td >{item.date}</Td>
                </Tr>
                <Tr>
                    <Td td1>picture</Td>
                    <Td >
                        {/* <img src="/img/gp/<%=item.image%>" width="70%" alt=""/> */}
                        </Td>
                </Tr>
                <Tr>
                    <Td td1>detail</Td>
                    <Td><Detail readOnly value={item.details}/></Td>
                </Tr>
                </tbody>
            </Table>

            <Buttons>
                <Button>
                    DELETE
                </Button>
                <Button>
                    EDIT
                </Button>
                <Button >
                    BUY
                </Button>
            </Buttons>
            <DeleteConfirm>
                "{item.title}"을/를 정말 삭제하시겠습니까??
                <DeleteConfirmButton>
                {/* onclick="reqDelete()" */}
                    yes
                </DeleteConfirmButton>
                <DeleteConfirmButton cancel >
                {/* onclick="cancleDelete()" */}
                    no
                </DeleteConfirmButton>
            </DeleteConfirm>
        </div>
            </section>
       )  
    }
      
}

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


const Button=styled.button`
    color: white;
    border: none;
    border-radius: 1.5vw;
    font-size: 3.5vw;
    background: rgb(99, 99, 99);
    padding: 1.8vw;
    margin: 1vw;

`;
const Buttons=styled.div`
    position: fixed;
    right: 5vw;
    bottom: 5vw;
`;
const DeleteConfirm= styled.div`
    display: none;
    position: fixed;
    padding: 10vw 5vw;
    width: 74%;
    height: 30%;
    background: #deece0;
    top: 55vw;
`;
const DeleteConfirmButton=styled.div`
    background: none;
    color: black;
    font-size: 6vw;
    font-weight: bold;
    position: absolute;
    width: 15vw;
    ${props=>props.cancel? "left":"right"}: 5vw;
    top: 35vw;
`;

const Detail=styled.textarea`
    padding: 1vw;
    line-height: 4vw;
    border: none;
    width: 50vw;
    border-radius: 3px;
    background-color: #eceadd;
`;




export default GPDetail;

