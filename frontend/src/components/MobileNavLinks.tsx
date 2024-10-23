import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const {logout}=useAuth0();
  return(
    <>
     <Link to='/order-status' className="flex bg-gray-100 items-center font-bold hover:text-orange-500 ">Order Status</Link>
    <Link to='/user-profile' className="flex bg-gray-100 items-center font-bold hover:text-orange-500">User Profile</Link>
    <Link to='/manage-restaurant' className="flex bg-gray-100 items-center font-bold hover:text-orange-500">Manage Restaurant</Link>
    <Button onClick={()=>logout()} className="flex item-center px-3 font-bold bg-orange-500 hover:bg-orange-600"> Log Out</Button>
    
    </>
  )
}

export default MobileNavLinks;