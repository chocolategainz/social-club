import Image from 'next/image';
import "./globals.css";
export default function Home() {
  return(
  <div className="home">
  
    <div className="main-picture relative w-full h-[932px]">
<Image 
src="/zachary-nelson-98Elr-LIvD8-unsplash.jpg"
    alt="friends jumping"
    fill
    style={{objectFit: "cover"}}
    loading= "lazy"
    className="saturate-50"
    />
    </div>

<div className="second-layer w-full h-[820px] bg-[#880808]">
<Image
src="/elevate-snnhGYNqm44-unsplash.jpg"
alt="friends drinking beer"
loading="lazy"
width= {460}
height= {460}
className="rounded-full object-cover aspect-square"
/>

<Image
src="/tim-mossholder-hOF1bWoet_Q-unsplash.jpg"
alt="group of friends together smiling"
loading="lazy"
width= {460}
height= {460}
className="rounded-full object-cover aspect-square"
/>

<Image
src="/Together We Are Stronger.jpg"
alt="paper"
loading="lazy"
width= {460}
height= {460}
className="rounded-full object-cover aspect-square"
/>
</div>
 </div>
  ) 
}

