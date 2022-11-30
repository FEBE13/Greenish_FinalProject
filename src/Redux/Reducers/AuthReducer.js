import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContextFill } from "../../Components/UserContext"
import { FAIL_GET_AUTH, SUCCESS_GET_AUTH } from "../Action/AuthAction"



const init = {
    token : "" ,
    isLogin : false,
    failed : false

}

function AuthReducer(state = init, action) {
    
  switch (action.type) {
    case SUCCESS_GET_AUTH : 
    const dataToken = action.payload.token
    localStorage.setItem("token",dataToken)
    localStorage.setItem("failed",false)
    // setAlrlogin("login_show")
    // setLogin("login_hide")
    return{
        ...state,
        token : dataToken,
        isLogin : true
    }
    case FAIL_GET_AUTH :
        localStorage.setItem("failed",true)
        return{
            ...state,
            failed : true
        }
    default:
        return init
  }
}

export default AuthReducer