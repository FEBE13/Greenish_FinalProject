import axios from "axios";
export const GET_USER = "GET_USER";
export const FETCH_START_USER = "FETCH_START_USER";
export const SUCCESS_GET_DATA_USER = "SUCCESS_GET_DATA_USER";



function StartFetching() {
    return {
        type : FETCH_START_USER
    }
}
function DoneFetchDataUser(data) {
    return {
        type : SUCCESS_GET_DATA_USER,
        payload : data.data
    }
}

export const getUser = () =>{
    return async (dispatch) =>{
        dispatch(StartFetching())
        const res = await axios.get("https://begreenishfinalproject-production.up.railway.app/users")
        dispatch(DoneFetchDataUser(res.data))
    }
}

export const postUser = (data) =>{
    return async () =>{
        axios.post("https://begreenishfinalproject-production.up.railway.app/users",data)
    }
} 

export const postParticipant = (data) =>{
    return  () =>{
         axios.post("https://begreenishfinalproject-production.up.railway.app/participants",data)
         axios.put( `https://begreenishfinalproject-production.up.railway.app/events/person/${data.id_event}`,data)
    }
} 
export const deleteUser = (id) => {
    return () =>{
        axios.delete(`https://begreenishfinalproject-production.up.railway.app/users/${id}`)
    }
}
export const updateUser = (id,data) => {
    return () =>{
        axios.put(`https://begreenishfinalproject-production.up.railway.app/users/${id}`,data)
    }
}