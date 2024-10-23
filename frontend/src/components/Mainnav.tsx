import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu"
import { Link } from "react-router-dom";
import bagIcon from "../assets/frontend_assets/bag_icon.png"

const Mainnav = () => {
    const {loginWithRedirect,isAuthenticated}=useAuth0();
  return(
    <span className="flex space-x-2 items-center">
      {isAuthenticated ?
      (<>
      <img src={bagIcon} className="rounded-lg object-cover"/>
      <Link to='/order-status' 
      className="font-bold p-2  text-lg hover:text-white-500 bg-orange-500 hover:bg-orange-600   rounded-lg">
        Order Status </Link>
      <UsernameMenu/> 
      </>)  : 
      (<Button variant="ghost" 
      className="font-bold mr-7 text-lg  text-white-600 hover:text-white-500 bg-orange-500 hover:bg-orange-600 rounded-lg"
      onClick={async()=>await loginWithRedirect()}>Log In</Button>)}
    </span>
    
  )
}

export default Mainnav;