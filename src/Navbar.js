import React from "react";

export default function Navbar() {
    return (
        <header className="header">
            <div className="left-section">
                <img className="code-logo" src="/images/project-logo1.jpg" alt="Code Platform Logo" />
            </div>

            <div className="middle-section">
                <img className="dark-mode" src="/images/choose-dark-mode.png" alt="Dark Mode Icon" />
                <ul className="nav-items">
                    <li>Home</li>
                    <li>Contact</li>
                    <li>Practice</li>
                    <li>Contest</li>
                </ul>
            </div>

            <div className="right-section">
                <img className="nav-profile" src="/images/nav-profile.png" alt="Profile Icon" />
            </div>
        </header>
    );
}
