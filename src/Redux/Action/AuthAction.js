import axios from "axios";
import { useContext } from "react";
export const FETCH_START_AUTH = "FETCH_START_AUTH";
export const SUCCESS_GET_AUTH = "SUCCESS_GET_AUTH";
export const FAIL_GET_AUTH = "FAIL_GET_AUTH";

function StartFetching() {
    return {
        type : FETCH_START_AUTH
    }
}
function DoneFetchDataAuth(data) {
    return {
        type : SUCCESS_GET_AUTH,
        payload : data
    }
}
function FailFetchData() {
    return {
        type : FAIL_GET_AUTH
    }
}


export const getAuth = (data) => {
    return async (dispatch) => {
        dispatch(StartFetching())
        const res = await axios.post("https://begreenishfinalproject-production.up.railway.app/auth/login",data)
        if (res.data.Message === "data ketemu dan berhasil login") {

            dispatch(DoneFetchDataAuth(res.data))
        }else if(res.data.Message === "data tidak ketemu"){
            alert("pastikan password dan email sudah benar")
            dispatch(FailFetchData())
            // alert("gagal login")
            // console.log("fail");
        }
    }
}
