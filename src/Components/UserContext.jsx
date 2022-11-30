import { createContext, useState } from "react"

export const UserContextFill = createContext()
function UserContext({children}) {
  const [login,setLogin] = useState("login_show")
  const [alrlogin,setAlrlogin] = useState("login_hide")

  return (
    <UserContextFill.Provider value={{login,setLogin,alrlogin,setAlrlogin}}>
        {children}
    </UserContextFill.Provider>
  )
}

export default UserContext