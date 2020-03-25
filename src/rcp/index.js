import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Item from './Item';

class RCPPage extends React.Component{
    state = {
        isLoading:true,
        rcpItems:[]
    };
    getRCPItems= async()=>{
        const {data:{data:rcpItems}} = await axios.get("http://127.0.0.1:3001/api/servicegp/allitems");
        this.setState({isLoading:false, rcpItems});
        console.log(rcpItems);
    };
    componentDidMount() {
        this.getRCPItems();
    };
    render(){
        const{ isLoading, rcpItems }=this.state;
        return(
            <section className="container">
            <NavBar>
                <Button type="reset">
                    새로고침
                </Button>
                <Button onclick="location.href='/servicegp/add'">
                    등록
                </Button>
            </NavBar>

            <ItemList>
                {isLoading ? "Loading...": rcpItems.map( item=>{
                    return <Item key={item.id} id={item.id} image={item.image} title={item.title} name={item.name} reqnum={item.reqnum} maxnum={item.maxnum} date={item.date}/>
                })}
            </ItemList>
            
        </section>
        )
    }
}


const NavBar = styled.nav`
    position: fixed;
    right: 5vw;
    top: 5vw;
`
const Button= styled.button`
    border: none;
    background: none;
`

const ItemList=styled.div`
    height: 35vh;
    padding: 5vw 4vw;
    margin-top: 10vw;
`

export default RCPPage;