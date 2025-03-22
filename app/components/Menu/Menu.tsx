'use client';

import './Menu.css';

import { useState } from 'react';

import menu from '../../data/menu';
import { Category } from '../../enums/Category';
import Item from './Item';

export default function Menu() {
    const categories = [
        { label: "Sanduíches", value: Category.Sanduiches },
        { label: "Bebidas", value: Category.Bebidas },
        { label: "Sobremesas", value: Category.Sobremesas },
    ];

    const [category, setCategory] = useState<Category>(Category.Sanduiches);
    const [isFading, setIsFading] = useState(false);

    function onSetCategory(buttonCategory: Category) {
        if (category !== buttonCategory) {
            setIsFading(true);
            setTimeout(() => {
                setCategory(buttonCategory);
                setIsFading(false);
            }, 300);
        }
    }

    return (
        <section className='menu-container'>
            <h2 className='menu-title'>Cardápio</h2>

            <div className='nav-menu'>
                {categories.map((select) => (
                    <button
                        key={select.value}
                        className={`item-nav-menu ${select.value === category ? 'item-nav-active' : ''}`}
                        onClick={() => onSetCategory(select.value)}
                    >
                        {select.label}
                    </button>
                ))}
            </div>

            <div className={`items-menu ${isFading ? 'opacity-0' : 'opacity-100'}`}>
                {menu[category]?.map((item) => (
                    <Item key={item.title} {...item} />
                ))}
            </div>
        </section>
    );
}
