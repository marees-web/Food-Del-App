import landingimg from "../assets/landing.png";
import appdownloadimg from "../assets/appDownload.png"
import SearchBar, { SearchForm } from "@/components/searchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
   const navigate=useNavigate();
    const handleSearchSubmit=(searchFormValues:SearchForm)=>{
        navigate({
         pathname:`/search/${searchFormValues.searchQuery}`,
        })
    }
  return(
    <div className="flex flex-col gap-12">
        <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                Dive into a takeaway today
            </h1>
            <span className="text-xl">Delivering Delights, Every Time.</span>
            <SearchBar placeHolder="search by City or Town" onSubmit={handleSearchSubmit}/>

        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={landingimg} />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tight">
                Making Deliveries Catchy and Cool.
                </span>
                <span>Download the Domato App for faster ordering and personalized recommentations</span>
                <img src={appdownloadimg}/>
            </div>
            
        </div>
        
        
  
  </div>

  )
}

export default HomePage;