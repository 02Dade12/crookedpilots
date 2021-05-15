import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import sanityClient from "../client";


export default function Event(){
   
const [eventData,setEvent] = useState(null);
useEffect(() => {

     sanityClient.fetch(`*[_type =="post"]{
         title,
         slug,
         mainImage{
             asset->{
                  _id,
                   url
            },
            alt
         }
     }`)
     .then((data) =>setEvent(data))
     .catch(console.error);
}, []);

    return (
         <main>

             <div className="min-h-screen p-12">
             <section className= "container mx-auto">
                 {/* <h1 className= "text-5xl flex justify-center cursive z-50">Here Lies my Blog Posts</h1>
                 <h2 className= "text-lg text-gray-600 flex justify-center mb-12 z-50">Messages in a Bottle</h2> */}
                 <div className= "grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {eventData && eventData.map((event,index) =>(
                     <article>
                         <Link to ={"/event/"+ event.slug.current} key={event.slug.current}>
                         <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                         key={index}>
                             <img 
                             src={event.mainImage.asset.url}
                             alt={event.mainImage.alt}
                             className="w-full h-full rounded-r object-cover absolute"/>
                             <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                 <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-blue-100 bg-opacity-75 rounded">{event.title}</h3>
                             </span>
                         </span>
                         </Link>
                     </article>
                    ))}
                 </div>
             </section>
             </div>
         </main>

    )
}