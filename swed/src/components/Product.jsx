
import styled from "styled-components"
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Link } from 'react-router-dom';
const Info = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    top:0;
    left:0;
    position:absolute;
    background-color:rgba(0,0,0,0.2);
    z-index:3;
    display:flex;
    align-items:center;
    justify-content:center;
    transition: all 1s ease;
    
`
const Container = styled.div`
    flex:1;
    margin:5px;
    min-width: 280px;
    height: 350px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:white;
    position:relative;
    &:hover ${Info}{
    opacity:1;
    }

`
const Circle = styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color:white;
    position:absolute;
`
const Image = styled.img`
    height:75%;
    z-index:2;
`

const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    align-items:center;
    justify-content: center;
    margin:10px;
    transition: all 0.8s ease ;
    &:hover{
    background-color:gray;
    transform:scale(1.1);
    cursor:pointer;

    }

`
const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartTwoToneIcon/>
            </Icon>
            <Icon>
                <Link to ={`/product/${item._id}`}>
                <SearchOutlinedIcon/>
                </Link>
               
            </Icon>
            <Icon>
                <FavoriteOutlinedIcon/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product
