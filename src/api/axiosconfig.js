import axios from "axios";

console.log("this was accessed");


export default axios.create({
    
    baseURL: 'http://localhost:8080',
    headers:{
        
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",

}
    
});