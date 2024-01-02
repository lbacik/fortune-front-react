import React from 'react'
import './About.css'
import {connect} from "react-redux";


const About = (props) => (
    <div className="mt-5">
        <section id="about" className="about">
            <div className="container">

                <div className="section-title" data-aos="zoom-out">
                    <h2>About</h2>
                    <p>Fortune</p>
                </div>

                <div className="about row content" data-aos="fade-up">
                    <div className="col-lg-6">
                        <blockquote>
                            <cite>
                                fortune is a program that displays a pseudorandom message from a database of quotations that first appeared in Version 7 Unix.
                            </cite>
                            <footer className="text-end pe-5">
                                <a href="https://en.wikipedia.org/wiki/Fortune_(Unix)" target="_blank">Wikipedia</a>
                            </footer>
                        </blockquote>

                        <p>
                            This project allows you to play with fortune cookies in your browser.
                            You can search for a specific fortune <i>(for now, the search is available only
                            in <a className="about-a-blue p-1 pl-2 pr-2 rounded rounded-2 text-nowrap" href="https://legacy.fortune.luka.sh">
                                the legacy version</a> of the frontend)</i>,
                            or you can <a className="about-a p-1 pl-2 pr-2 rounded rounded-2" href="#" onClick={props.onExploreToggle}>explore</a> the database.
                            Note that there is more than one database of fortune files at the moment (each available by individual API), as each Debian release contains some differences
                            in the packages related to Fortunes!

                        </p>

                        <p>
                            Here are some helpful links related to this project. The diagram on the right illustrates
                            the relationships between different project components.
                        </p>
                        <ul>
                            <li><i className="ri-check-double-line"></i>
                                <a className="about-a-blue p-1 pl-2 pr-2 rounded rounded-2"
                                   href="https://lbacik.medium.com/fortune-3e6c3f488e9d">Article on medium</a> describing
                                the first version of this project. In fact, the only thing that changed is the frontend design.
                                The current version is built on top of the template from <a className="about-a-blue p-1 pl-2 pr-2 rounded rounded-2"
                                        href="https://bootstrapmade.com/">BootstrapMade</a> (which looks much better
                                than my own template, which I formerly used; however, it still needs some work to be done).
                            </li>
                            <li><i className="ri-check-double-line"></i>
                                <a className="about-a-blue p-1 pl-2 pr-2 rounded rounded-2" href="https://legacy.fortune.luka.sh">The first frontend
                                    version</a> - it still has some advantages, like choosing a different backend
                                API (which means the other Fortunes databases) and the Search form
                                (powered by ElasticSearch).
                            </li>
                            <li><i className="ri-check-double-line"></i>
                                Available backends (as for the time being, to utilize different
                                than the default backend, you need to use the previous version of the frontend):
                                <ul>
                                    <li><i className="ri-global-line"></i>
                                        <a className="about-a-backend p-1 pl-2 pr-2 rounded rounded-2"
                                           href="https://api.fortune.luka.sh/docs">api.fortune.luka.sh</a> this virtual
                                        address links to the latest Debian release backend.
                                    </li>
                                    <li><i className="ri-global-line"></i>
                                        <a className="about-a-backend p-1 pl-2 pr-2 rounded rounded-2"
                                           href="https://debian-12.api.fortune.luka.sh/docs">debian-12.api.fortune.luka.sh</a>
                                    </li>
                                    <li><i className="ri-global-line"></i>
                                        <a className="about-a-backend p-1 pl-2 pr-2 rounded rounded-2"
                                           href="https://debian-11.api.fortune.luka.sh/docs">debian-11.api.fortune.luka.sh</a>
                                    </li>
                                    <li><i className="ri-global-line"></i>
                                        <a className="about-a-backend p-1 pl-2 pr-2 rounded rounded-2"
                                           href="https://debian-10.api.fortune.luka.sh/docs">debian-10.api.fortune.luka.sh</a>
                                    </li>
                                    <li><i className="ri-task-line"></i>
                                        TODO: APIs for <code>testing</code> and <code>sid</code> debian
                                        versions <i className="ri-ghost-smile-line additional"></i>
                                    </li>
                                </ul>
                            </li>
                            <li><i className="ri-github-fill"></i>
                                Frontend GitHub project repository&nbsp;
                                <a className="about-a-blue p-1 pl-2 pr-2 rounded rounded-2"
                                   href="https://github.com/lbacik/fortune-front-react"
                                >fortune-front-react</a>
                            </li>
                            <li><i className="ri-github-fill"></i>
                                Backend GitHub project repository&nbsp;
                                <a className="about-a-blue p-1 pl-2 pr-2 rounded rounded-2"
                                   href="https://github.com/lbacik/fortune-api"
                                >fortune-api</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                        <p>
                            <strong>Updates</strong> are impossible through this website or the API it builds on top of.
                            The only way to change or add a new quote is to contribute to the
                            &nbsp; <a className="about-a-blue p-1 pl-2 pr-2 rounded rounded-2 text-nowrap" href="https://github.com/shlomif/fortune-mod">
                            <i className="ri-github-fill additional i-black"></i> upstream project</a>.
                            Of course, such changes will need time to be processed and finally included in the database accessible through this interface!
                        </p>

                        <img src="/assets/fortune-diag.jpg" className="img-fluid m-auto" alt=""/>
                    </div>
                </div>

            </div>
        </section>
    </div>
)

const mapStateToProps = state => {
    return {
        explorerShow: state.explorerShow,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onExploreToggle: () => dispatch({type: 'EXPLORER_TOGGLE'}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(About)

