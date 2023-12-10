import { useState } from "react";
import "./main.css";
import { projectsDB, buttons } from "./Projects";

function Main() {
    const [active, setActive] = useState("all");
    const [project, setProject] = useState(projectsDB);
    const [showMore, setShowMore] = useState({});

    function handleClick(categoryName) {
        setActive(categoryName);
        const newArr = projectsDB.filter((item) => {
            const categoryItems = item.category.find((item) => {
                return item === categoryName;
            });
            return categoryItems === categoryName;
        });
        setProject(newArr);
    }

    function toggleShowMore(index) {
        setShowMore((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    }

    return (
        <main className="flex" id="projects">
            <section className="left-section flex">
                <button
                    className={active === "all" ? "active" : null}
                    onClick={() => {
                        setActive("all");
                        setProject(projectsDB);
                    }}
                >
                    All Projects
                </button>
                {buttons.map((item) => {
                    return (
                        <button
                            className={
                                active === item.category ? "active" : null
                            }
                            onClick={() => handleClick(item.category)}
                        >
                            {item.name}
                        </button>
                    );
                })}
            </section>

            <section className="right-section flex">
                {project.map((item, index) => {
                    return (
                        <div key={item.name} className="card">
                            <img
                                width={300}
                                src={"/images/" + item.image}
                                alt=""
                            />
                            <div style={{ width: "300px" }} className="box">
                                <h1 className="title">{item.name}</h1>
                                {/*<p className="subtitle">{item.paragraph}</p>*/}
                                {showMore[index] && (
                                <div className="subtitle">
                                    <p>{item.paragraph}</p>
                                </div>
                            )}
                            </div>

                            <div
                                style={{ gap: "12px", padding: "0.3rem" }}
                                className="lang"
                            >
                                <span>{item.lang}</span>
                            </div>
                            <div className="links flex">
                                <div style={{ gap: "12px" }} className="flex">
                                    {item.link && (
                                        <a
                                            className="icon icon-link"
                                            href={"" + item.link}
                                            target="_blank"
                                        ></a>
                                    )}
                                    <a
                                        className="icon icon-github"
                                        href={"" + item.github}
                                        target="_blank"
                                    ></a>
                                </div>
                                <button className="more" onClick={() => toggleShowMore(index)}>
                                    {showMore[index] ? "less" : "more"}
                                </button>
                            </div>
                            
                        </div>
                    );
                })}
            </section>
        </main>
    );
}

export default Main;
