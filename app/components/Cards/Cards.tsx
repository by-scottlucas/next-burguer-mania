"use client";

import './Cards.css';

import { useEffect, useState } from 'react';

export default function Cards() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const cardImages = {
        mostPopularDesktop: "/images/categories/mais-populares-desktop.png",
        mostPopularMobile: "/images/categories/mais-populares-mobile.png",
        cheeseHeavy: "/images/categories/muito-queijo.png",
        baconHeavy: "/images/categories/muito-bacon.png",
    };

    return (
        <section className="cards-container">
            <div className="cards-content">
                <div>
                    <a href="#">
                        <img
                            src={
                                isMobile ?
                                    cardImages.mostPopularMobile :
                                    cardImages.mostPopularDesktop
                            }
                            loading='lazy'
                            alt="Mais Populares"
                            className="card-category-image most-popular-card"
                        />
                    </a>
                </div>

                <div className="flex flex-col justify-between gap-2.5">
                    <a href="#">
                        <img
                            src={cardImages.cheeseHeavy}
                            loading='lazy'
                            alt="Muito Queijo"
                            className="card-category-image cheese-heavy-card"
                        />
                    </a>

                    <a href="#">
                        <img
                            src={cardImages.baconHeavy}
                            loading='lazy'
                            alt="Muito Bacon"
                            className="card-category-image bacon-heavy-card"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
