import React from "react";


function Footer() {
    return (
        <footer class="fixed-bottom sticky-bottom navbar navbar-expand-lg navbar-light bg-light">
        <div class="col"> 
          <div class="container-fluid text-center">
            <div class="row row-cols-auto">
              <div class="col"><a href="/admin">Admin</a></div>
              <div class="col"><a href="/social">Social Media</a></div> 
            </div>
          </div>
        </div>
    </footer>
    )
}

export default Footer;
