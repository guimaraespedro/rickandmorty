import api from "./service";

const characterQuery = (query)=>{
    return new Promise((resolve,reject)=>{
        api.get('/character/',query).then(res=>{
            resolve(res.data)
        }).catch(error=>{
            reject(error && error.response)
        })
    }) 
}

export default characterQuery;