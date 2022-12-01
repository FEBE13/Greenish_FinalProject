import { createContext, useState } from "react"

export const UserContextFill = createContext()
function UserContext({children}) {
  const [login,setLogin] = useState("login_show")
  const [alrlogin,setAlrlogin] = useState("login_hide")
  const [role,setrole] = useState("")

  return (
    <UserContextFill.Provider value={{login,setLogin,alrlogin,setAlrlogin,role,setrole}}>
        {children}
    </UserContextFill.Provider>
  )
}

export default UserContext