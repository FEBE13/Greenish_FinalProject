import axios from "axios";
export const GET_DATA = "GET_DATA";
export const FETCH_START = "FETCH_START";
export const SUCCESS_GET_DATA = "SUCCESS_GET_DATA";


function StartFetching() {
    return {
        type : FETCH_START
    }
}
function DoneFetchData(data) {
    return {
        type : SUCCESS_GET_DATA,
        payload : data.data
    }
}

export const getEvent = () =>{

    return async (dispatch) =>{
        dispatch(StartFetching())
        const res = await axios.get("https://begreenishfinalproject-production.up.railway.app/events")
        dispatch(DoneFetchData(res.data))
    }
}