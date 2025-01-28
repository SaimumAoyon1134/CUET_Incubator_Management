

import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import { login } from '../../redux/apiCalls';
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
    width:100vw;
    height:100vh;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url("https://d1u4v6449fgzem.cloudfront.net/2020/03/The-Ecommerce-Business-Model-Explained.jpg") center;
    display:flex;
    align-items:center;
    justify-content:center;
    background-size:cover;
`;

const Wrapper = styled.div`
    width:25%;
    padding:20px;
    background-color:white;
`;

const Form = styled.form`
    display:flex;
    flex-direction:column;
`;

const Title = styled.h1`
    font-size:25px;
    font-weight:300;
`;

const Input = styled.input`
    flex:1;
    min-width:40%;
    margin:20px 10px 0px 0px;
    padding:10px;
`;

const Button = styled.button`
    width:25%;
    border:1px solid teal;
    padding:15px 20px;
    margin:auto;
    margin-top:10px;
    &:hover {
        background-color:teal;
        cursor:pointer;
        transition: all 1.5s ease;
        transform:scale(1.1);
    }
    &:disabled {
        color:red;
        cursor: not-allowed;
    }
    margin-bottom:10px;
`;

const ErrorMessage = styled.span`
    color: red;
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
`;

const Link = styled.a`
    margin:auto;
    font-size:12px;
    text-decoration:underline;
    cursor:pointer;
    &:hover {
        color:blue;
    }
`;

const Register = ({onComplete}) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { isFetching, error, currentUser } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
        onComplete()
    };

    // // Redirect if currentUser exists
    // useEffect(() => {
    //     if (currentUser) {
    //         navigate("/home"); 
         

    //          // Replace '/home' with your dashboard or another route
    //     }
    // }, [currentUser, navigate]);

    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input
                        placeholder="username"
                        value={username}  // Bind the value of the input to the state
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        placeholder="password"
                        type="password"
                        value={password}  // Bind the value of the input to the state
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button onClick={handleClick} disabled={isFetching} className="login-btn">
                        LOGIN
                    </Button>
                    {error && <ErrorMessage>Something went wrong, please try again.</ErrorMessage>}
                    {/* <Link onClick={() => navigate("/forgot-password")}>Forgot Password?</Link>
                    <Link onClick={() => navigate("/register")}>Create an account</Link> */}
                </Form>
            </Wrapper>
        </Container>
    );
};

export default Register;

