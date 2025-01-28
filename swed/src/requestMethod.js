import axios from "axios";
const BASE_URL = "http://localhost:2000/api/";
//const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NGViMWUxNjc5ZmRjYTAyYmFiNThiNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTczNjEzNDIyNywiZXhwIjoxNzM2MzkzNDI3fQ.33elrn7Q30wt-jls60gvN9MvrCG2zpQLPZDtWs7WtiY";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
export const publicRequest = axios.create({
    baseURL : BASE_URL,
});
export const userRequest = axios.create({
    baseURL : BASE_URL,
    header : {token:`Bearer ${TOKEN}`},
});