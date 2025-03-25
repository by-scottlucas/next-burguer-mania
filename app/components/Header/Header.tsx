"use client";

import './Header.css';

import { useCallback, useState } from 'react';

export default function Header() {
    const logotipo = "/visual_identity/burguer-mania-logo.png";
    const navLinks = [
        { title: "Home", link: "#" },
        { title: "Categorias", link: "#category" },
        { title: "Cardápio", link: "#menu" },
        { title: "Localização", link: "#localization" },
        { title: "Contato", link: "#contact" },
    ];
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setMenuIsOpen((prev) => !prev);
    }, []);

    return (
        <nav className="nav-container">
            <div className="nav-content">
                <a href="#" className="nav-brand-box">
                    <img src={logotipo} alt="Burguer Mania" className="nav-logo" />
                </a>

                <button
                    type="button"
                    onClick={toggleMenu}
                    data-collapse-toggle="navbar"
                    className="burger-menu-button"
                    aria-controls="navbar"
                    aria-label='Menu Button'
                    aria-expanded={menuIsOpen ? "true" : "false"}
                >
                    <i className="bi bi-list text-black"></i>
                </button>

                <div className={`nav-items-box ${menuIsOpen ? "open" : "close"}`} id="navbar">
                    <ul className="nav-list">
                        {navLinks.map((navItem, index) => (
                            <li key={index}>
                                <a href={navItem.link} className="nav-item">
                                    {navItem.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
