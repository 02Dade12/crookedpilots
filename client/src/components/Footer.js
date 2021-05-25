import React from "react";


function Footer() {
  return (
    <footer className="fixed-bottom sticky-bottom navbar navbar-expand-lg navbar-light bg-light border-top">
      <div className="col">
        <div className="container-fluid text-center">
          <div className="row row-cols-auto">
            <div className="col">
              <a href="/admin">Admin</a>
            </div>
            <div className="col">
              <a href="https://open.spotify.com/artist/3YfsvE3J8urQB1NeYJdEat">Spotify</a>
            </div>
            <div className="col">
              <a href="https://soundcloud.com/crookedpilots">Sound Cloud</a>
            </div>
            <div className="col">
              <a href="https://www.facebook.com/crooked.pilots.1"><i className="bi bi-facebook"></i></a>
            </div>
            <div className="col">
              <a href="https://www.instagram.com/crookedpilots/"><i className="bi bi-instagram"></i></a>
            </div>
            <div className="col">
              <a href="https://www.youtube.com/channel/UC6iE9ngRy5ED9DKY6ttJ9Fw"><i className="bi bi-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;


