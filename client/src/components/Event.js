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
        <main className="background">
            <div className="container ">
                <section className="container mx-auto">
                    <div class="row">
                        <h1 className="text-center pb-20 texth" style={{ padding: 100 }}>Welcome to the Events Page</h1>
                        {eventData && eventData.map((event, index) => (
                            <article className="col-md-4 ">
                                <Link to={"/event/" + event.slug.current} key={event.slug.current}>
                                    <div className="cardz rounded " key={index}>
                                        <img src={event.mainImage.asset.url} className="card-img img contain" style={{ height: 250 }} alt={event.mainImage.alt} />
                                        
                                        <h5 className="textr rounded">{event.title}</h5>
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