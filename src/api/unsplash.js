import axios from "axios";


export default axios.create({ 
    baseUrl: "https://api.unsplash.com/",
    headers : {
        Authorization: "Client-ID wHu4IDbz-fseu8J3V-TLKG1bTv8XsEAmg4RsmFuVpX8",
    }
})
