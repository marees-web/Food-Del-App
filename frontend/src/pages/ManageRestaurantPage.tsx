import { useCreateMyRestaurant, useGetMyRestaurant, useGetMyRestaurantOrders, useUpdateMyRestaurant } from "@/api/MyRestaurantApi";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsList } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/user-profile-form/manage-restaurant-form/ManageRestaurantForm";
import { TabsContent, TabsTrigger } from "@/components/ui/tabs";

const ManageRestaurantPage = () => {
  const{createRestaurant,isLoading:isCreateLoading}=useCreateMyRestaurant();
  const{restaurant}=useGetMyRestaurant();
  const{updateRestaurant,isLoading:isUpdateLoading}=useUpdateMyRestaurant();

  const {orders}=useGetMyRestaurantOrders();

  const isEditing=!!restaurant;
  return (
       <Tabs defaultValue="orders">
        <TabsList className="space-x-10 ">
          <TabsTrigger value="orders" className="hover:bg-orange-500 p-2 rounded-lg">Orders</TabsTrigger>
          <TabsTrigger value="manage-restaurant" className="hover:bg-orange-500 p-2 rounded-lg">Manage Restaurant</TabsTrigger>
        </TabsList>
        <TabsContent value="orders" className="space-y-5 bg-gray-100 p-10 rounded-lg ">
          <h2 className="text-2xl font-bold">{orders?.length} Active Orders</h2>
          {orders?.map((order)=>(
            <OrderItemCard order={order}/>
          ))}
        </TabsContent>
        <TabsContent value="manage-restaurant">
        <ManageRestaurantForm 
              restaurant={restaurant}
              onSave={isEditing ? updateRestaurant:createRestaurant} 
              isLoading={isCreateLoading||isUpdateLoading}
          />;
        </TabsContent>
       </Tabs>


  
        )
}

export default ManageRestaurantPage;