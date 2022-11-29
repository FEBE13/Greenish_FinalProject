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