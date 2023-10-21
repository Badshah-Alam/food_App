import { createContext } from "react";
const UserContext=createContext({
  user:{
  name:"King",
  email:"king@gmail.com"
  }
})

UserContext.displayName="UserContext"
export default UserContext
