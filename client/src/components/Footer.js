import React from "react";
import IG from "./icons/instagram.svg"


function Footer() {
  return (
    <footer class="fixed-bottom sticky-bottom navbar navbar-expand-lg navbar-light bg-light">
      <div class="col">
        <div class="container-fluid text-center">
          <div class="row row-cols-auto">
            <div class="col">
              <a href="/admin">Admin</a>
            </div>
            <div class="col">
              <a href="https://open.spotify.com/artist/3YfsvE3J8urQB1NeYJdEat">Spotify</a>
            </div>
            <div class="col">
              <a href="https://soundcloud.com/crookedpilots">Sound Cloud</a>
            </div>
            <div class="col">
              <a href="https://www.facebook.com/crooked.pilots.1"><i class="bi bi-facebook"></i></a>
            </div>
            <div class="col">
              <a href="https://www.instagram.com/crookedpilots/"><i class="bi bi-instagram"></i></a>
            </div>
            <div class="col">
              <a href="https://www.youtube.com/channel/UC6iE9ngRy5ED9DKY6ttJ9Fw"><i class="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;


