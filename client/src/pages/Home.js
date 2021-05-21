import React from "react";
import pic1 from "./pictures/pic1.png";
import band from "./pictures/band.jpg";
import album1 from "./pictures/album1.png";
import albumArt1 from "./pictures/albumArt1.png";
import albumArt2 from "./pictures/albumArt2.png";
import albumArt3 from "./pictures/albumArt3.png";
import laurence from "./pictures/laurence.jpg";
import maurico from "./pictures/maurico.jpeg";
import ivan from "./pictures/ivan.jpeg";

import "./css/homePage.css";



function Home() {
    return (
        <main>

        {/* Carousel Below*/}
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <svg class="" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#000000"/></svg>
              <div class="container">
                <div class="carousel-caption">
                <img src={pic1} class="align-self-center carousel-background-img"></img>
                  <p>"Join us & take flight"</p>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#000000"/></svg>
              <div class="container">
                <div class="carousel-caption text-end">
                <img src={albumArt1} class="align-self-center albumArt"></img>
                <img src={albumArt3} class="align-self-center albumArt"></img>
                <img src={albumArt2} class="align-self-center albumArt"></img>
                
                  <h1>Check us out on all major platforms</h1>
                  <p>Apple Music, Spotify, Sound Cloud, & YouTube.</p>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#000000"/></svg>
              <div class="container">
                <div class="carousel-caption">
                <img src={band} class="align-self-center band-pictures"></img>
                </div>
              </div>
            </div>

            
          </div>

          <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          
          <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      {/* Band Members Below */}
        <div class="container marketing">
          <div class="row">

          <div class="col-lg-4">
            <img class="bandmember rounded-circle" src={maurico}></img>
              <h2>Maurico Donoso</h2>
              <p>Lead Guitar</p>
              <button class="btn btn-secondary" href="#" type="button" class="btn btn-secondary" data-container="div" title="Bio" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">View details &raquo;</button>
            </div>

            <div class="col-lg-4">
            <img class="bandmember rounded-circle" src={ivan}></img>
              <h2>Ivan Rivera</h2>
              <p>Drummer</p>
              <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>

            <div class="col-lg-4">
              <img class="bandmember rounded-circle" src={laurence}></img>
              <h2>Laurence J. Colleton</h2>
              <p>Bass Guitar</p>
              <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
            </div>

          </div>
      
          <hr class="featurette-divider"></hr>
      
          <div class="row featurette">
            <div class="col-md-7">
              <h2 class="featurette-heading">Delayed Departure </h2>
              <p class="lead">After countless hours of practice and dedication, this is the first studio production created by Crooked Pilots. A special thank you goes out to the friends and family that has supported since this plane has taken flight.</p>
            </div>
            <div class="col-md-5">
              <img src={album1}></img>
            </div>
          </div>
            
        </div>
        
        </main>
    )
}

export default Home;