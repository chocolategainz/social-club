import Image from 'next/image';


export default function Home() {
  return(
  <div className="home">
  
    <div className="main-picture relative w-full h-[932px]">
<Image 
src="/johan-mouchet-MCTap3U0bFg-unsplash.jpg"
    alt="friends jumping"
    fill
    style={{objectFit: "cover"}}
    loading= "lazy"
    className="saturate-50"
    />
    </div>

<div className="second-layer">
<Image
src="/elevate-snnhGYNqm44-unsplash.jpg"
alt="friends drinking beer"
loading="lazy"
width= {420}
height= {420}
className="rounded-full object-cover aspect-square"
/>

<Image
src="/yingyi-dai-khJJqciKS10-unsplash.jpg"
alt="group of friends together smiling"
loading="lazy"
width= {420}
height= {420}
className="rounded-full object-cover aspect-square"
id="smiles"
/>

<Image
src="/Together We Are Stronger.jpg"
alt="inspirational paper message"
loading="lazy"
width= {420}
height= {420}
className="rounded-full object-cover aspect-square"
/>
</div>

<div className="secondaryPicture relative w-full h-[600px] aspect-[16/9]">
  <Image 
    src="/kobby-mendez-xBFTjrMIC0c-unsplash.jpg"
    alt="Beautiful lights with young adults raising their hands"
    fill
    style = {{objectFit: "cover"}}
    loading="lazy"
    className='saturate-50'
  />
</div>

<div className = "footer">
  <h5>Location</h5>
  <h1> Demo Street</h1>
  <h1>London, E12 345,</h1>
  <h1> United Kingdom</h1>
</div>
 </div>
  ) 
}

