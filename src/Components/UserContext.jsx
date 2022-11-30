import { createContext, useState } from "react"

export const UserContextFill = createContext()
function UserContext({children}) {
  const [login,setLogin] = useState(" ")
  const [alrlogin,setAlrlogin] = useState(" ")

  return (
    <UserContextFill.Provider value={{login,setLogin,alrlogin,setAlrlogin}}>
        {children}
    </UserContextFill.Provider>
  )
}

export default UserContext