import axios from "axios";
export const GET_USER = "GET_USER";
export const FETCH_START = "FETCH_START";
export const SUCCESS_GET_USER = "SUCCESS_GET_USER";


function StartFetching() {
    return {
        type : FETCH_START
    }
}
function DoneFetchUser(data) {
    return {
        type : SUCCESS_GET_USER,
        payload : data.data
    }
}

export const getUser = () =>{

    return async (dispatch) =>{
        dispatch(StartFetching())
        const res = await axios.get("https://begreenishfinalproject-production.up.railway.app/events")
        dispatch(DoneFetchUser(res.data))
    }
}