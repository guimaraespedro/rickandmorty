import api from "./service";

const characterQuery = (query)=>{
    return new Promise(resolve=>{
        api.get('/character/',query).then(res=>{
            resolve(res.data)
        })
    }) 
}

export default characterQuery;