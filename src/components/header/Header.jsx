import { useEffect, useState } from "react";
import "./header.css";

function Header() {
    const [showModel, setshowModel] = useState(false);
    function showModell() {
        if (!showModel) {
            setshowModel(true);
        } else {
            setshowModel(false);
        }
    }
    const [mode, setMode] = useState(
        localStorage.getItem("currentMode") || "dark",
    );
    useEffect(() => {
        if (mode === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [mode]);
    return (
        <header className="flex">
            <button
                className="menu flex icon-th-menu-outline"
                onClick={showModell}
            ></button>
            <div></div>
            <nav>
                <ul className="flex">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <button
                onClick={() => {
                    localStorage.setItem(
                        "currentMode",
                        mode === "dark" ? "light" : "dark",
                    );
                    setMode(localStorage.getItem("currentMode"));
                }}
                className="mode flex"
            >
                {mode === "dark" ? (
                    <span className="icon-moon-o"></span>
                ) : (
                    <span className="icon-sun"></span>
                )}
            </button>
            {showModel && (
                <div className="fixed">
                    <ul className="modal">
                        <li>
                            <button
                                className="icon-close"
                                onClick={showModell}
                            ></button>
                        </li>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}
export default Header;
