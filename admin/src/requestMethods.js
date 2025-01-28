import axios from "axios";
const BASE_URL = "http://localhost:2000/api/";
const TOKEN = null;

try {
    TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
} catch (e) {
    console.error(e)
}

console.log(TOKEN)
export const publicRequest = axios.create({
    baseURL : BASE_URL,
});
export const userRequest = TOKEN ?
                                axios.create({
                                    baseURL : BASE_URL,
                                    headers : {token:`Bearer ${TOKEN}`},
                                }) :
                                (...args) => {
                                    if (TOKEN) {
                                        userRequest = axios.create({
                                            baseURL : BASE_URL,
                                            headers : {token:`Bearer ${TOKEN}`},
                                        })
                                        userRequest(...args)
                                    } else {
                                        throw Error("TOKEN not found. unable to make user request")
                                    }
                                    
                                };