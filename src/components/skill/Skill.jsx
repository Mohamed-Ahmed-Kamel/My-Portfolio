import "./skill.css";

function Skill() {
    return (
        <section className="skills-section" id="skills">
            <h1>Skills</h1>
            <div className="skills-bar flex">
                <div className="skills-box">
                    <h2>Front-End</h2>
                    <div>
                        <div className="skill-container">
                            <div className="title">
                                <img width={30} src={"/images/html.png"} />
                                {/*<p>HTML</p>*/}
                            </div>
                            <div className="skill-counter">
                                <div className="skills html">90%</div>
                            </div>
                        </div>

                        <div className="skill-container">
                            <div className="title">
                                <img width={30} src={"/images/css.png"} />
                                {/*<p>CSS</p>*/}
                            </div>
                            <div className="skill-counter">
                                <div className="skills css">70%</div>
                            </div>
                        </div>

                        <div className="skill-container">
                            <div className="title">
                                <img width={30} src={"/images/js.png"} />
                                {/*<p>JS</p>*/}
                            </div>
                            <div className="skill-counter">
                                <div className="skills js">50%</div>
                            </div>
                        </div>

                        <div className="skill-container">
                            <div className="title">
                                <img width={30} src={"/images/react.png"} />
                                {/*<p>React.js</p>*/}
                            </div>
                            <div className="skill-counter">
                                <div className="skills reactjs">70%</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skills-box">
                    <h2>Back-End</h2>
                    <div>
                        <div className="skill-container">
                            <div className="title">
                                <img width={30} src={"/images/node.png"} />
                                {/*<p>Node.js</p>*/}
                            </div>
                            <div className="skill-counter">
                                <div className="skills nodejs">85%</div>
                            </div>
                        </div>

                        <div className="skill-container">
                            <div className="title">
                                <img width={30} src={"/images/mongodb.png"} />
                                {/*<p>MongoDb</p>*/}
                            </div>
                            <div className="skill-counter">
                                <div className="skills mongodb">40%</div>
                            </div>
                        </div>

                        <div className="skill-container">
                            <div className="title">
                                <img width={30} src={"/images/js.png"} />
                                {/*<p>JavaScript</p>*/}
                            </div>
                            <div className="skill-counter">
                                <div className="skills jsn">80%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
            
            <h1>Other</h1>
            <div className="skills-box-other">
                <div className="card">
                    <div className="card-header">
                        <div className="image">
                            <img width={200} src={"/images/oop.png"} />
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="skill-counter">
                            <div className="skills oop">90%</div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div className="image">
                            <img width={200} src={"/images/dsa.png"} />
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="skill-counter">
                            <div className="skills dsa">90%</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skill;
