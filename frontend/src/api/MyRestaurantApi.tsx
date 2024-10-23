import { Order, Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL= import.meta.env.VITE_API_BASE_URL;

export const useGetMyRestaurant=()=>{
    const{getAccessTokenSilently}=useAuth0();

    const getMyRestaurantRequest= async (): Promise<Restaurant>=>{
        const accessToken= await getAccessTokenSilently();

        const response=await fetch(`${API_BASE_URL}/api/my/restaurant`,{
            method:"GET",
            headers:{
                Authorization:`Bearer ${accessToken}`,
            },
        });
        if(!response.ok){
            throw new Error("Failed to get Restaurant")
        }
        return response.json();
    };
    const{data:restaurant,isLoading}=useQuery("fetchMyRestaurant",getMyRestaurantRequest);
    return{restaurant,isLoading}
}

export const useCreateMyRestaurant=()=>{
    const {getAccessTokenSilently}=useAuth0();

    const createMyRestaurantRequest=async(restaurantFormData:FormData): Promise<Restaurant> =>{
        const accessToken= await getAccessTokenSilently();
      
        const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            body: restaurantFormData,
          });
        if(!response.ok){
            throw new Error('Failed to create Restaurant')
        }
        return response.json();

    }

    const{mutateAsync:createRestaurant,
        isLoading,
        isSuccess,
        error}=useMutation(createMyRestaurantRequest);
    if(isSuccess){
        toast.success("Restaurant Created!")
    }
    if(error){
        toast.error("Unable to create Restaurant")
    }
    return{
        createRestaurant,isLoading
    }
};
export const useUpdateMyRestaurant=()=>{
    const{getAccessTokenSilently}=useAuth0();

    const updateRestaurantRequest=async(restaurantFormData: FormData): Promise<Restaurant> =>{
        const accessToken= await getAccessTokenSilently();

        const response=await fetch(`${API_BASE_URL}/api/my/restaurant`,{
            method:'PUT',
            headers:{
                Authorization:`Bearer ${accessToken}`,
            },
            body:restaurantFormData,
        });
        if(!response.ok){
            throw new Error("Failed to update Restaurant")
        }
       return response.json();
    };
    const{mutateAsync:updateRestaurant,isLoading,isSuccess,error}=useMutation(updateRestaurantRequest);
    if(isSuccess){
        toast.success("Restaurant Updated!");
    }
    if(error){
        toast.error('Unable to update Restaurant')
    }
    return{
        updateRestaurant,isLoading
    }
};
export const useGetMyRestaurantOrders=()=>{
    const {getAccessTokenSilently}=useAuth0();

    const getMyRestaurantOrdersRequest=async():Promise<Order[]>=>{
        const accessToken=await getAccessTokenSilently();

        const response= await fetch(`${API_BASE_URL}/api/my/restaurant/order`,{
            headers:{
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },

        });
        if(!response.ok){
            throw new Error ("Failed to fetch orders")
        };

        return response.json();

    };

    const {data:orders,isLoading}=useQuery("fetchmyRestaurantorders",getMyRestaurantOrdersRequest);
    return{orders,isLoading}
};

type UpdateOrderstatusRequest={
    orderId:string;
    status:string;
}
export const useUpdateMyRestaurantOrderStatus=()=>{
    const {getAccessTokenSilently}=useAuth0();

    const updateMyRestaurantOrderStatusRequest=async(updateStatusOrderRequest : UpdateOrderstatusRequest)=>{
        const accessToken=await getAccessTokenSilently();

        const response=await fetch(`${API_BASE_URL}/api/my/restaurant/order/${updateStatusOrderRequest.orderId}/status`,{
            method:"PATCH",
            headers:{
                Authorization:`Bearer ${accessToken}`,
                "Content-Type":"application/json",
            },
            body:JSON.stringify({status: updateStatusOrderRequest.status}),
        });
        if(!response.ok){
            throw new Error ('Failed to update status')
        }

        return response.json();


    }
    const {mutateAsync:updateRestaurantStatus,isLoading,isError,isSuccess,reset}=useMutation(updateMyRestaurantOrderStatusRequest);
    if(isSuccess){
        toast.success("Order status Updated")
    }
    if(isError){
        toast.error("Unable to Update Order status")
        reset();
    }
    return{ updateRestaurantStatus,isLoading}
}