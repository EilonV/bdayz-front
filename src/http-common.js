import axios from 'axios'

export default axios.create({
    baseURL: "https://bdayz-back.onrender.com/api/v1/users",
    headers: {
        "Content-type": "application/json"
    }
})

// baseURL: "http://localhost:5000/api/v1/users",
