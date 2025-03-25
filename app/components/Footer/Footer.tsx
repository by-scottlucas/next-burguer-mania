'use client';

import './Footer.css';

import { useEffect, useState } from "react";

export default function Footer() {
    const [currentYear, setCurrentYear] = useState(2024);
    const sectionData = {
        aboutUs: {
            title: "Quem Somos",
            listTopics: [
                { label: 'Institucional', path: "#" },
                { label: 'Trabalhe Conosco', path: "#" },
            ]
        },
        contact: {
            title: "Contato",
            listTopics: [
                { label: '(99) 99999-9999', path: "#" },
                { label: 'contato@burguermania.com', path: "#" },
            ]
        },
        socialMedia: {
            title: "Redes Sociais",
            listTopics: [
                { label: 'Instagram', path: "#" },
                { label: 'Threads', path: "#" },
            ]
        },
        bottomInfos: {
            label: `Burguer Mania 2024 - ${currentYear}. Todos os direitos reservados.`,
        }
    }

    useEffect(() => {
        const date = new Date();
        const year = date.getFullYear()
        setCurrentYear(year)
    }, [])

    return (
        <footer className='footer-container'>
            <div className='footer-middle-container'>
                <div className='footer-card'>
                    <h2 className='footer-card-title'>
                        {sectionData.aboutUs.title}
                    </h2>

                    <ul className='footer-card-list'>
                        {sectionData.aboutUs.listTopics.map((topic, index) => (
                            <li className='footer-card-item' key={index}>
                                <a href={topic.path}>{topic.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='footer-card' id='contact'>
                    <h2 className='footer-card-title'>
                        {sectionData.contact.title}
                    </h2>

                    <ul className='footer-card-list'>
                        {sectionData.contact.listTopics.map((topic, index) => (
                            <li className='footer-card-item' key={index}>
                                <a href={topic.path}>{topic.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='footer-card'>
                    <h2 className='footer-card-title'>
                        {sectionData.socialMedia.title}
                    </h2>

                    <ul className='footer-card-list'>
                        {sectionData.socialMedia.listTopics.map((topic, index) => (
                            <li className='footer-card-item' key={index}>
                                <a href={topic.path}>{topic.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="footer-bottom-container">
                <p className='footer-bottom-text'>{sectionData.bottomInfos.label}</p>
            </div>
        </footer>
    )
}