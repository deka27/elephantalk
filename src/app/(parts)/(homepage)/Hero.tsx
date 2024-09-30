import Image from "next/image";
import HeroImage from "../../../assets/hero.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-gradient-to-tl from-sky-100 to-[#2F67F3] h-screen">
    <div className="m-20 p-24 grid grid-cols-2">
      <div className="flex flex-col space-y-10">
        <div>
          <Image
            src="/logo-naked.svg"
            alt="People using Elephantalk"
            width={80}
            height={80}
            className=""
          />
        </div>
        <div className="text-7xl text-white font-semibold">
          <div>Welcome,</div>
          <div>We are</div>
          <div>elephantalk</div>
        </div>
        <div className="text-white tracking-tighter">
        An app designed to make online meetings more accessible by actively translating sign language. 
        It seamlessly integrates with platforms like Zoom and Teams, converting sign language into text for other participants, ensuring smooth communication for all attendees.
        </div>
        <div className=""><Link href={"/"} className="bg-white p-3 rounded-lg">Sign up</Link></div>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={HeroImage}
          alt="People using Elephantalk"
          width={600}
          height={600}
        />
      </div>
    </div>
    </div>
  )
}

export default Hero