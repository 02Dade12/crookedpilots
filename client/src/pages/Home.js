import React, { useState, useEffect } from "react";
import pic1 from "./pictures/pic1.png";
import band from "./pictures/band.jpg";
import album1 from "./pictures/album1.png";
import albumArt1 from "./pictures/albumArt1.png";
import albumArt2 from "./pictures/albumArt2.png";
import albumArt3 from "./pictures/albumArt3.png";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";

import "./css/homePage.css";



const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
function Home() {

  const [authorData, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
        name,
        "bio": bio[0].children[0].text,
        "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data))
      .catch(console.error);
  }, []);

  if (!authorData) return <div>Loading...</div>;
    return (
        <main className="dagrey">

        {/* Carousel Below*/}
        <div id="myCarousel" className="carousel slide " data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner img3">
            <div className="carousel-item active">
              <svg className="" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#000000"/></svg>
              <div className="container">
                <div className="carousel-caption">
                <img src={pic1} className="align-self-center carousel-background-img"></img>
                  <p>"Join us & take flight"</p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#000000"/></svg>
              <div className="container">
                <div className="carousel-caption text-end">
                <img src={albumArt1} className="align-self-center albumArt"></img>
                <img src={albumArt3} className="align-self-center albumArt"></img>
                <img src={albumArt2} className="align-self-center albumArt"></img>
                
                  <h1>Check us out on all major platforms</h1>
                  <p>Apple Music, Spotify, Sound Cloud, & YouTube.</p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#000000"/></svg>
              <div className="container">
                <div className="carousel-caption">
                <img src={band} className="align-self-center band-pictures"></img>
                </div>
              </div>
            </div>

            
          </div>

          <button className="carousel-control-prev homenext" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          
          <button className="carousel-control-next homenext" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      {/* Band Members Below */}
        <div className="container marketing">
          <div className="row">
           {authorData && authorData.map((author, index) => (
          <div className="col-lg-4 cardz2" key={index}>
            <img className="bandmember  rounded-circle" src={urlFor(author.authorImage).url()}></img>
              <h2>{author.name}</h2>
              <p>{author.bio}</p>
            </div>

              ))}

          </div>
      
          <hr className="featurette-divider"></hr>
      
          <div className="row featurette cardz2">
            <div className="col-md-7">
              <h2 className="featurette-heading">Delayed Departure </h2>
              <p className="lead">After countless hours of practice and dedication, this is the first studio production created by Crooked Pilots. A special thank you goes out to the friends and family that has supported since this plane has taken flight.</p>
            </div>
            <div className="col-md-5">
              <img src={album1}></img>
            </div>
          </div>
            
        </div>
        
        </main>
    )
}

export default Home;