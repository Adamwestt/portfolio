import React from "react";
const EducationPage = ({ closed }) => {
    return (
        <div className={closed ? "extended" : "body-content"}>
            <div class="container-fluid p-0">
                <section class="resume-section" id="education">
                    <div class="resume-section-content">
                        <h2 class="mb-5">Education</h2>
                        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">Humber College </h3>
                                <div class="subheading mb-3">High School Diploma</div>
                            </div>
                            <div class="flex-shrink-0"><span class="text-primary">Sept 2010</span></div>
                        </div>
                        <div class="d-flex flex-column flex-md-row justify-content-between">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">Westview High School</h3>
                                <div class="subheading mb-3">Bachelor of Business administration </div>
                            </div>
                            <div class="flex-shrink-0"><span class="text-primary">June 2005</span></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default EducationPage;
