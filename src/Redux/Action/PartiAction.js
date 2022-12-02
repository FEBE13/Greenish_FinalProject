import axios from "axios";
export const GET_DATA_PARTI = "GET_DATA_PARTI";
export const FETCH_START = "FETCH_START";
export const SUCCESS_GET_DATA_PARTI = "SUCCESS_GET_DATA_PARTI";


function StartFetching() {
    return {
        type : FETCH_START
    }
}
function DoneFetchData(data) {
    return {
        type : SUCCESS_GET_DATA_PARTI,
        payload : data.data
    }
}

export const getParti = () =>{
    return async (dispatch) =>{
        dispatch(StartFetching())
        const res = await axios.get("https://begreenishfinalproject-production.up.railway.app/participants")
        dispatch(DoneFetchData(res.data))
    }
}