import { Order, OrderStatus } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import { Select, SelectContent ,SelectItem, SelectTrigger, SelectValue} from "./ui/select";
import { ORDER_STATUS } from "@/config/order-status-config";
import { useUpdateMyRestaurantOrderStatus } from "@/api/MyRestaurantApi";
import { useEffect, useState } from "react";

type Props = {
  order:Order
}

const OrderItemCard = ({order}: Props) => {

    const{updateRestaurantStatus,isLoading}=useUpdateMyRestaurantOrderStatus();

    const[status,setStatus]=useState<OrderStatus>(order.status);
    useEffect(() => {
        setStatus(order.status)
    }, [order.status])

    const handleStatuschange=async(newStatus:OrderStatus)=>{
     await   updateRestaurantStatus({orderId:order._id as string,status:newStatus});
      setStatus(newStatus);
    }
    const getTime=()=>{
        const orderdateTime= new Date(order.createdAt);

        const hours=orderdateTime.getHours();
        const minutes=orderdateTime.getMinutes();
        const paddedMinutes=minutes<10? `0${minutes}` : minutes;

        return `${hours}:${paddedMinutes}`;
    }
  return(
    <Card>
        <CardHeader>
            <CardTitle className="grid md:grid-cols-4 gap-4 justify-between mb-3 text-orange-500">
                <div>
                    Customer Name:<span className="ml-2 font-normal text-slate-500">{order.deliveryDetails.name}</span>
                </div>
                <div>
                    Delivery Address:
                    <span className="ml-2 font-normal text-slate-500">
                        {order.deliveryDetails.addressLine1},{order.deliveryDetails.city}
                    </span>
                </div>
                <div>
                    Time:<span className="ml-2 font-normal text-slate-500">{getTime()}</span>
                </div>
                <div>
                    Total Cost:<span className="ml-2 font-normal text-slate-500">₹{(order.totalAmount /100).toFixed(2)}</span>
                </div>
            </CardTitle>
            <Separator/>
        </CardHeader>
        <CardContent className="flex flex-col gap-6">
             <div className="flex flex-col gap-2">
                {order.cartItems.map((cartItem)=>(
                    <span>
                        <Badge variant="outline" className="mr-2">
                            {cartItem.quantity}
                        </Badge>
                        {cartItem.name}
                    </span>
                ))}
             </div>
             <div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="status">What is the status of this Order ?</Label>
                    <Select value={status} disabled={isLoading} onValueChange={(value)=>handleStatuschange(value as OrderStatus)}>
                        <SelectTrigger id="status">
                            <SelectValue placeholder="Status"/>
                        </SelectTrigger>
                        <SelectContent position="popper">
                            {ORDER_STATUS.map((status)=>(
                                <SelectItem value={status.value}>{status.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
             </div>
        </CardContent>
    </Card>
  )
}

export default OrderItemCard;