import styled from "styled-components"
import { useNavigate } from 'react-router-dom'
const Container = styled.div`
    width:100vw;
    height:100vh;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)) ,url("https://d1u4v6449fgzem.cloudfront.net/2020/03/The-Ecommerce-Business-Model-Explained.jpg") center ;
    display:flex;
    align-items:center;
    background-size:cover;
    justify-content:center;
    `
const Wrapper = styled.div`
    width:40%;
    padding:20px;
    background-color:white;

`
const Form = styled.form`
    display:flex;
    flex-wrap:wrap;
`
const Title = styled.h1`
    font-size:25px;
    font-weight:300;

`
const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding:10px;

`
const Agreement = styled.span`
    font-size:14px;
    margin:20px 0px;
`
const Button= styled.button`
    width:25%;
    border:1px solid teal;
    padding:15px 20px;
    margin:auto;
    &:hover{
        background-color:teal;
        cursor:pointer;
        transition: all 1.5s ease;
        transform:scale(1.1);
    }

`

const Register = () => {
    const navigate = useNavigate();
    
        const handleLogin = () => {
            // Redirect to home page (assuming '/' is the route for the homepage)
            navigate('/login');
        }
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="User Name"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>I agree with this <b>Terms & Conditions</b>I agree with this <b>Terms & Conditions</b></Agreement>
                <Button onClick={handleLogin}> CREATE</Button>
            </Form>
        </Wrapper>
        
        
    </Container>
  )
}

export default Register
