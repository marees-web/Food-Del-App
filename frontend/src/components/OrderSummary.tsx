import { Restaurant } from "@/types";
import { CartItem } from "../pages/Detailpage";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Trash } from "lucide-react";

type Props = {
  restaurant:Restaurant;
  cartItems:CartItem[];
  removeFromCart:(cartItem:CartItem)=>void
}

const OrderSummary = ({restaurant,cartItems,removeFromCart}: Props) => {

    const getTotalCost=()=>{
      const  totalInRupees=cartItems.reduce((total,cartItem)=>total + cartItem.price* cartItem.quantity,0 );

        const totalWithDelivery= totalInRupees + restaurant.deliveryPrice;
        return (totalWithDelivery.toFixed(2));
    };
  return(
    <>
    <CardHeader>
        <CardTitle className="text-2xl font-bold bg-orange-600 tracking-tight flex justify-between rounded-md">
            <span>Your Order</span>
            <span  >₹{getTotalCost()}</span>
        </CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col sm:mx-2  gap-5">
         {cartItems.map((item)=>(
            <div className="flex justify-between ">
                <span>
                    <Badge variant="outline" className="mr-2">
                       {item.quantity} 
                    </Badge>
                    {item.name}
                </span>
                <span className="flex items-center gap-1 ">
                  <Trash className="cursor-pointer" color="red" size={20} onClick={()=>removeFromCart(item)}/>
                ₹{((item.price* item.quantity))}
                </span>
            </div>
         ))}
         <Separator/>
         <div className="flex justify-between">
            <span className="text-orange-500 text-2xl font-bold">Delivery</span>
            <span>₹{(restaurant.deliveryPrice).toFixed(1)}</span>
         </div>
         <Separator/>

    </CardContent>
    </>
  )
}

export default OrderSummary;