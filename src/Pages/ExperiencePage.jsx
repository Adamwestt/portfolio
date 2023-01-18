import React from "react";
const ExperiencePage = ({ closed }) => {
    return (
        <div className={closed ? "extended" : "body-content"}>
            <div class="container-fluid p-0">
                <section class="resume-section" id="experience">
                    <div class="resume-section-content">
                        <h2 class="mb-5">Experience</h2>
                        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">SKILL-LINK | APPRENTICE PIPE FITTER </h3>
                                <div class="subheading mb-3">DEC 2018 - FEB 2022</div>
                                <ul>
                                    <li>Interpreted blueprints to determine size, type, quantities and required prep of materials.</li>
                                    <li>As on the job training, assist journeyman and welders with assigned tasks</li>
                                    <li>Take measurements, layout, prep, weld spools and install square and plumb into advanced process piping systems.</li>
                                    <li>Been involved in massive shutdowns and turn arounds.</li>
                                    <li>Stick welding, tig welding, soldering, and brazing in school and on the job experience.</li>
                                    <li>Demonstrate learned knowledge by taking initiative and executing tasks accurately</li>
                                    <li>Cut pipe with saws, pipe cutter, hammer and chisel, cutting torch and pipe cutting machine.</li>
                                    <li>Cleaning/Preparing pipe for installation, material gathering and inspection, Using hand tools such as grinders, drills and saw.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">EDMONTON EXCHANGER | PIPEFITTER</h3>
                                <div class="subheading mb-3">AUG 2019 - OCT 2019</div>
                                <ul>
                                    <li>	Installed Variety of Valves and fittings.</li>
                                    <li>	Secured pipes to structures with clamps, brackets and hangers.</li>
                                    <li>	Eliminated risks by correctly identifying safety hazards.</li>
                                    <li>	inspect structures to avoid any obstruction and delays through the project.</li>
                                    <li>	Stick welding, tig welding, soldering, and brazing in school and on the job experience</li>
                                    <li>	Cleaning/Preparing pipe for installation, material gathering and inspection, Using hand tools such as grinders, drills and saw.
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div class="flex-grow-1">
                                <h3 class="mb-0">BRAVO TARGET SAFETY | SAFETY WATCH</h3>
                                <div class="subheading mb-3">OCT 2017 - FEB 2019</div>
                                <ul> <li>Performed on-site bottle watch, confined Space entry and spark/fire watch.</li>
                                    <li>Provided support to ensure that all on-site personnel work in a safe manner and comply with company and regulatory/legislative requirements for Occupational Health & Safety.</li>
                                    <li>Followed and advocated for all rules, policies and procedures as per the client's health and safety program.</li>
                                    <li>Intervened in unsafe acts and unsafe conditions and took appropriate action to influence safe working environment.</li>
                                    <li>Increased the security of personnel working directly with flammable materials, by suggesting additional protective clothing.</li>
                                    <li>Decreased the risk of fire within confined workplaces, by implementing a novel hole-watch system.</li>
                                </ul>
                            </div>
                            <div class="flex-shrink-0"><span class="text-primary">Nov 2016 - Dec 2018</span></div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ExperiencePage;
