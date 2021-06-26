import React, { useState, useEffect } from "react";
import crookedPilots from "./pictures/crookedPilots.png";
import band from "./pictures/band.jpg";
import album1 from "./pictures/album1.png";
import albumArt1 from "./pictures/albumArt1.png";
import albumArt2 from "./pictures/albumArt2.png";
import { Spring, animated } from "react-spring";
import albumArt3 from "./pictures/albumArt3.png";
import banner from "./pictures/banner.png";
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
    <Spring
    from={{ opacity: 0, marginTop: 500 }}
    to={{ opacity: 1, marginTop: 0 }}
      config={{ delay: 1500, duration: 1500 }}
    >
      {props => (
        <animated.div style={props}>
          <main className="dagrey">

            {/* Carousel Below*/}
            <div id="myCarousel" className="carousel slide " data-bs-ride="carousel">

              <div className="carousel-inner img3">
                <div className="carousel-item active">
                  <svg className="" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#000000" /></svg>
                  <div className="container">
                    <div className="carousel-caption">
                      <img src={crookedPilots} className="align-self-center carousel-background-img"></img>
                      <p>"Join us & take flight"</p>
                    </div>
                  </div>
                </div>

                <div className="carousel-item">
                  <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#000000" /></svg>
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
                  <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#000000" /></svg>
                  <div className="container">
                    <div className="carousel-caption">
                      <img src={band} className="align-self-center band-pictures"></img>
                    </div>
                  </div>
                </div>


              </div>

              <button className="carousel-control-prev homeback" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
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
              {/* <div className="row">
          {authorData && authorData.map((author, index) => (
            <div className="col-lg-4 cardz2" key={index}>
              <img className="bandmember  rounded-circle" src={urlFor(author.authorImage).url()}></img>
              <h2>{author.name}</h2>
              <p>{author.bio}</p>
            </div>

          ))}

        </div> */}

              <hr className="featurette-divider"></hr>

              <div className="row featurette cardz2">
                <div className="col-md-7 order-md-2">
                  <h2 className="featurette-heading">The Pilot's Story</h2>
                  <p className="lead">Crooked Pilots exists to have an outlet to both escape and connect to the world. This means anybody can be a Crooked Pilot. You simply need to have a passion for music and present your talents on your boarding pass. This will board you on our plane full of other likeminded individuals who wish to work together to produce music to be shared with the rest of the world.</p>

                  <p className="lead">Crooked Pilots are not defined by a specific genre but rather specialize in mixing genres like Rock, Blues, R&B, Jazz, And Pop together to create a unique sound. We connect to people in the world trough our passions, in order to  help, heal, and join together on the same flight.</p>

                  <p className="lead">The question is where is your destination?</p>
                </div>
                <div className="col-md-5 order-md-1">
                  <img src={banner} className="img-feat"></img>
                </div>
              </div>

              <hr className="featurette-divider"></hr>

              <div className="row featurette cardz2">
                <div className="col-md-7">
                  <h2 className="featurette-heading">Delayed Departure </h2>
                  <p className="lead">After countless hours of practice and dedication, this is the first studio production created by Crooked Pilots. A special thank you goes out to the friends and family that has supported since this plane has taken flight.</p>
                </div>
                <div className="col-md-5">
                  <img src={album1} className="img-feat"></img>
                </div>
              </div>

            </div>

          </main>
        </animated.div>
      )
      }
    </Spring>
  )
}

export default Home;