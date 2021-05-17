import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client";


export default function Event() {

    const [eventData, setEvent] = useState(null);
    useEffect(() => {

        sanityClient.fetch(`*[_type =="post"]{
         title,
         slug,
         author,
         mainImage{
             asset->{
                  _id,
                   url
            },
            alt
         }
     }`)
            .then((data) => setEvent(data))
            .catch(console.error);
    }, []);

    return (
        //  <main>

        //      <div className="container">
        //      <section className= "container mx-auto">
        //          {/* <h1 className= "text-5xl flex justify-center cursive z-50">Here Lies my Blog Posts</h1>
        //          <h2 className= "text-lg text-gray-600 flex justify-center mb-12 z-50">Messages in a Bottle</h2> */}
        //          <div className= "grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        //             {eventData && eventData.map((event,index) =>(
        //              <article>
        //                  <Link to ={"/event/"+ event.slug.current} key={event.slug.current}>
        //                  <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
        //                  key={index}>
        //                      <img 
        //                      src={event.mainImage.asset.url}
        //                      alt={event.mainImage.alt}
        //                      className="w-full h-full rounded-r object-cover absolute"/>
        //                      <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
        //                          <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-blue-100 bg-opacity-75 rounded">{event.title}</h3>
        //                      </span>
        //                  </span>
        //                  </Link>
        //              </article>
        //             ))}
        //          </div>
        //      </section>
        //      </div>
        //  </main>

        <main>
            <div className="container">
            <section className= "container mx-auto">
            <div class="row">
            <h1 className= "text-center">Welcome to the Events Page</h1>
                {eventData && eventData.map((event, index) => (
                    <article className= "col-md-4 ">
                        <Link to={"/event/" + event.slug.current} key={event.slug.current}>
                            <div className="card bg-light text-black shadow-lg rounded" key={index}>
                                <img src={event.mainImage.asset.url} className="card-img" alt={event.mainImage.alt}/>
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">{event.title}</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text">Last updated 3 mins ago</p>
                                    </div>
                                
                            </div>
                        </Link>
                    </article>
                ))}
                </div>
                </section>
            </div>
        </main>
    )
}