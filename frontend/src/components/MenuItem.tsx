import { MenuItem } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  menuItem: MenuItem;
  addToCart:()=>void;
}

const MenuItems = ({menuItem,addToCart}: Props) => {
  return(
    <Card className="cursor-pointer" onClick={addToCart}>
        <CardHeader>
            <CardTitle className="font-semibold text-slate-500">{menuItem.name}</CardTitle>
        </CardHeader>
        <CardContent className="font-bold text-slate-500">
        ₹{(menuItem.price).toFixed(2)}
        </CardContent>
    </Card>
  )
}

export default MenuItems;