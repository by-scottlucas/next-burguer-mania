'use client';

import './Item.css';

import { useEffect, useState } from 'react';

import { ItemDTO } from './dto/ItemDTO';

export default function Item({ image, title, description }: ItemDTO) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className={`card-menu ${isVisible ? 'visible' : 'invisible'}`}>
            <img src={image} alt={title} className='card-menu-image' />
            <h2 className='card-menu-title'>{title}</h2>
            <p className="card-menu-description">{description}</p>
        </div>
    );
}