import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function Navbar({ darkMode, toggleDarkMode }) {
    return (
        <header
            className="header"
            style={{
                backgroundColor: "rgb(241, 226, 226)", 
                color: "#fff", 
                padding: "10px 20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center", 
            }}
        >
            <div className="left-section">
                <Link to="/">
                    <img
                        className="code-logo"
                        src="/images/project-logo1.jpg"
                        alt="Code Platform Logo"
                        style={{ height: "50px" }} 
                    />
                </Link>
            </div>

            <div className="middle-section" style={{ display: "flex", alignItems: "center" }}>
                <img
                    className="dark-mode-toggle"
                    src={darkMode ? "/images/choose-light-mode.png" : "/images/choose-dark-mode.png"}
                    alt={darkMode ? "Light Mode" : "Dark Mode"}
                    onClick={toggleDarkMode} 
                    style={{ cursor: "pointer", width: "40px", height: "40px", marginRight: "20px" }}
                />
                <ul className="nav-items" style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
                    <li style={{ margin: "0 15px", color: "black", fontWeight: "bold" }}>
                        <h1>Keep Coding, Keep Improving</h1>
                    </li>
                </ul>
            </div>

            <div className="right-section">
                <img
                    className="nav-profile"
                    src="/images/nav-profile.png"
                    alt="Profile Icon"
                    style={{ height: "40px", width: "40px", borderRadius: "50%" }} 
                />
            </div>
        </header>
    );
}
