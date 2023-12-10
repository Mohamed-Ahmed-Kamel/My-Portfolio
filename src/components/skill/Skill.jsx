import "./skill.css";

function Skill() {
    return (
        <section className="skills-section" id="skills">
            <h1>Skills</h1>
            <div className="skills-bar flex">
                <div className="skills-box">
                    <h2>Front-End</h2>
                    <div>
                        <p>HTML</p>
                        <div className="skill-container">
                            <div className="skills html">80%</div>
                        </div>

                        <p>CSS</p>
                        <div className="skill-container">
                            <div className="skills css">70%</div>
                        </div>

                        <p>JavaScript</p>
                        <div className="skill-container">
                            <div className="skills js">30%</div>
                        </div>

                        <p>React.js</p>
                        <div className="skill-container">
                            <div className="skills reactjs">40%</div>
                        </div>
                    </div>
                </div>

                <div className="skills-box ">
                    <h2>Back-End</h2>
                    <div>
                        <p>Node.js</p>
                        <div className="skill-container">
                            <div className="skills nodejs">85%</div>
                        </div>
                        <p>MongoDb</p>
                        <div className="skill-container">
                            <div className="skills mongodb">40%</div>
                        </div>
                        <p>JavaScript</p>
                        <div className="skill-container">
                            <div className="skills jsn">80%</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Skill;
