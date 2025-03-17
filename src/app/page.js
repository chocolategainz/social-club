import Image from 'next/image';
import Animated from './Animated';
import Modal from './Modal';


export default function Home() {
  return(
  <div className="home">

    <div className="main-picture relative flex justify-center min-h-[100vh] w-full"> 
<Image 
src="/johan-mouchet-MCTap3U0bFg-unsplash.jpg"
    alt="friends sitting down and talking"
    className="saturate-50 object-cover items-center"
 fill
  priority
    />
    {/*Location*/}
      <p className = "location absolute inset-0 flex flex-col items-center justify-center text-center px-2 sm:px-4 text-lg sm:text-xl text-white font-semibold">123 Demo Street, London, GN8 4B3</p>
 <Animated />
   <Modal />
    </div>


{/*1*/}
<div className = "container mx-auto px-4"> 

<div className = "flex flex-col md:flex-row gap-5 items-center mt-8">
<Image
src="/elevate-snnhGYNqm44-unsplash.jpg"
alt="A group of friends colliding their beers together at a lively pub"
loading="lazy"
width={420}
height={420}
className="rounded-full object-cover aspect-square max-w-[420px] md:w-[40%] sm:w-[80%] w-full"
/>


<div className = "flex-1 text-center md:text-left mt-4 md:mt-0">
 <h1 className = "title">Good Vibes</h1> 
<p className = "leading-relaxed"> 
A lively beer-tasting event brings together friends and strangers alike to sample a variety of craft brews while enjoying good conversation. 
With live music playing in the background and a relaxed atmosphere, attendees raise their glasses, share their favorite flavors, and connect over their love for great beer.  
</p>
 </div>
</div>

{/*2*/}
<div className="flex flex-col md:flex-row items-center gap-5 mt-8">
 <Image
    src="/yingyi-dai-khJJqciKS10-unsplash.jpg"
    alt="A lit up sign saying 'Let's Party'"
    loading="lazy"
    width={420}
    height={420}
    className="rounded-full object-cover aspect-square max-w-[420px] md:w-[40%] sm:w-[80%] w-full"
  />

  <div className="flex-1 text-center md:text-left">
    <h1 className="title">Get Lit</h1> 
    <p className="leading-relaxed"> 
      A vibrant party pulses with energy as friends and newcomers alike dance to the rhythm of the music, their laughter blending with the beat. 
      With drinks in hand and a shared excitement in the air, the night becomes a celebration of togetherness, where every moment is filled with joy, connection, and unforgettable memories.
    </p>
  </div>
</div>

{/*3*/}

<div className="flex flex-col md:flex-row gap-5 items-center mt-8">
<Image
src="/Together We Are Stronger.jpg"
alt="paper cut out human figures joined hand in hand"
loading="lazy"
width={420}
height={420}
className="rounded-full object-cover aspect-square w-full max-w-[420px] md:w-[40%] sm:w-[80%]"
/>

<div className = "finalContent flex-1 text-center md:text-left">
  <h1 className = "title" id = "finalTitle">Togetherness</h1>
  <p className = "leading-relaxed">
  Our community gathering fills the space with laughter and conversation as people come together to share stories, enjoy good food, and build new connections.
  </p>
  </div>
 </div>

</div>

{/*RSVP - Join Us*/} 
<div className="secondaryPicture relative w-full h-[600px] aspect-[16/9]">

  <Image 
    src="/kobby-mendez-xBFTjrMIC0c-unsplash.jpg"
    alt="A row of 3 cocktail glasses"
    fill
    loading="lazy"
    className="saturate-50 mt-8 object-cover"
  />
<div className = "rsvp absolute inset-0 flex flex-col items-center justify-center text-center px-4">
<h1 className = "overlayTitle absolute bottom-[40%] md:bottom-[60%] text-white" >RSVP</h1>
<p className = "overlayText text-white md:top-[50%] text-sm sm:text-base sm:max-w-sm md:text-lg lg:text-xl max-w-sm md:max-w-md lg:max-w-lg px-4">Your +1s and +2s are always welcome! Just let us know in advance so we can make sure there's enough drinks for everyone.</p>
  </div>
   <Modal />
</div>

 </div>

  );
};

