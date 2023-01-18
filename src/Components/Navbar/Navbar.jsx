import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ closedHandle, closed }) => {
  console.log(closed);
  return (
    <div className={closed ? "container no-bg" : "container"}>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a class="navbar-brand js-scroll-trigger" href="#page-top">
          <span class="d-block d-lg-none">Adam West</span>
          <span class="d-none d-lg-block"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/profile.jpg" alt="" /></span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link" href="/">About Me</a></li>
            <li class="nav-item"><a class="nav-link" href="/skills">Skills</a></li>
            <li class="nav-item"><a class="nav-link" href="/experience">Experience</a></li>
            <li class="nav-item"><a class="nav-link" href="/education">Education</a></li>
            <li class="nav-item"><a class="nav-link" href="/projects">GitHub Projects</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
