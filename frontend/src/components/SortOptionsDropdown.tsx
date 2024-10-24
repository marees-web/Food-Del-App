import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";

type Props = {
  onChange:(value:string)=>void;
  sortOption:string;
}
const SORT_OPTIONS=[

    {
        label:"Best match",
        value:"bestMatch",
    },
    {
        label:"Delivery price",
        value:"deliveryPrice",
    },
    {
        label:"Estimated Delivery time",
        value:"estimatedDeliveryTime",
    },
]
const SortOptionsDropdown = ({onChange,sortOption}: Props) => {

    const selectSortLabel=SORT_OPTIONS.find((option)=>option.value===sortOption)?.label||SORT_OPTIONS[0].label;
  return(
    <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
            <Button variant="outline" className="w-full">
                Sort By: {selectSortLabel}
            </Button>

        </DropdownMenuTrigger>
        <DropdownMenuContent>
            {SORT_OPTIONS.map((option)=>(
                <DropdownMenuItem className="cursor-pointer" onClick={()=>onChange(option.value)}>
                    {option.label}
                </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SortOptionsDropdown;