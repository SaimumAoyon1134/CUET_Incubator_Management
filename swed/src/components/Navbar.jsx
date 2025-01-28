import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px"})}


 
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items : center;
   ${mobile({ padding: "10px 0px"})}
`
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;

`
const Center = styled.div`
     flex:1;
     text-align:center;

`
const Right = styled.div`
    flex:1;
    display: flex;
    align_items:center;
    justify-content: flex-end;

`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
     ${mobile({display: "none"})}
`
const Input = styled.input`
    border:none;
     ${mobile({ width: "50px"})}
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left:25px;
    padding:5px;

`
const Logo =styled.h1`
    font-weight:bold;
  `
const MenuItem = styled.div`
    font-size:14px;
    cursor: pointer;
    margin:5px;
`
const Navbar = () => {
  const quantity =useSelector(state=>state.cart.quantity);
  // console.log(quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
              <Input/>
              <SearchIcon style={{color:'gray',fontSize:16}}/>
          </SearchContainer>         
        </Left>
        <Center>
          <Logo>
           IncuManager
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            Register
          </MenuItem>
          <MenuItem>
            Sign In
          </MenuItem>
          <Link to ="/cart">
          <MenuItem>
          <Badge badgeContent={quantity} color="primary">
        <ShoppingCartOutlinedIcon/>
      </Badge>

          </MenuItem>
          </Link>
        </Right>

      </Wrapper>
    </Container>
  )
}

export default Navbar
