import hero from "../assets/frontend_assets/header_img.png"


const Hero = () => {
  return(
    <div>
        <img src={hero} className="w-full max-h-[600px] object-cover"/>
    </div>
  )
}

export default Hero;