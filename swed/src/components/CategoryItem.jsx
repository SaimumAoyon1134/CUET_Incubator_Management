
import styled from "styled-components"
import { Link } from "react-router-dom";
const Container = styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position:relative;
`
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    opacity:0.7;
`
const Info = styled.div`
    position: absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
`
const Title= styled.h1`
    color:green;
    margin-bottom:20px;
    font-weight:600;
    align-items:center;
    justify-content:center;
`
const Button = styled.button`
    border:none;
    padding:10px;
    background-color:white;
    color:gray;
    cursor:pointer;
    font-weight:600;
    &:hover{
    background-color:green;}
`

const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to ={`/products/${item.cat}`}>
        <Image src={item.img}/>
        <Info>
            <Title>
                {item.title}
            </Title>
            <Button>
               Avail Now
            </Button>
        </Info>
        </Link>
    </Container>
  )
}

export default CategoryItem
