import React from "react";
const ProjectsPage = ({ closed }) => {
    return (
        <div className={closed ? "extended" : "body-content"}>
            <div class="container-fluid p-0">
                <section class="resume-section" id="project">
                    <div class="resume-section-content">
                        <h2 class="mb-5">Github Projects</h2>
                        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">My First Github commit </h3>
                                <p>
                                    <a href="https://github.com/Adamwestt/adamwest" className="text-primary" target="_blank">https://github.com/Adamwestt/adamwest</a>
                                </p>
                            </div>
                        </div>
                        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">My Sample Github Website </h3>
                                <p>
                                    <a href="https://github.com/Adamwestt/website" className="text-primary" target="_blank">https://github.com/Adamwestt/website</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProjectsPage;
