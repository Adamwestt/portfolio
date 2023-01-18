import React from "react";
const OverviewPage = ({ closed }) => {
  return (
    <div className={closed ? "extended" : "body-content"}>
      <div class="container-fluid p-0">
        <section class="resume-section" id="about">
          <div class="resume-section-content">
            <h1 class="mb-0">
              Adam
              <span class="text-primary"> West</span>
            </h1>
            <div class="subheading mb-5">
              10755 92 St, Edmonton, AB
              <br />
              <a href="tel:(587)589-9109"> (587)589-9109</a>
              <a href="mailto:Adam_westt@hotmail.com"> Adam_westt@hotmail.com</a>
            </div>
            <p class="lead mb-5">Certified Pipefitter effective at resolving issues and achieving challenging goals, while establishing an excellent work ethic and management expertise. Recognized for meticulous attention to details and safety. </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OverviewPage;
//https://www.holopin.io/@lotfijb#
