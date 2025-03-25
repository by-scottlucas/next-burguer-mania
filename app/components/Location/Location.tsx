'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import "./Location.css";

const Map = dynamic(() => import('./Map'), { ssr: false });

export default function Location() {
    const coordinates: [number, number] = [-24.01164382326493, -46.4145969008687];
    const businessInfo = {
        addressInfo: {
            firstLine: 'Avenida Costa e Silva, 217',
            secondLine: 'Boqueirão, Praia Grande',
            reference: 'Próximo ao Shopping PG',
        },
        contactInfo: {
            label: "Contato",
            value: "(99) 99999-9999"
        },
        operationInfo: {
            label: "Funcionamento",
            value: "Segunda à Domingo das 18h às 01h"
        }
    };

    return (
        <section className='location-container' id='location'>
            <h2 className='location-container-title'>Localização</h2>

            <div className='location-container-content'>
                <Map coordinates={coordinates} addressInfo={businessInfo.addressInfo} />

                <div className='infos-content'>
                    <div className='address-info'>
                        <h3 className='primary-title'>{businessInfo.addressInfo.firstLine}</h3>
                        <h3 className='primary-title'>{businessInfo.addressInfo.secondLine}</h3>
                        <p className='secondary-title'>{businessInfo.addressInfo.reference}</p>
                    </div>

                    <div className='additional-infos'>
                        <div className='contact-box'>
                            <p className='contact-title'>{businessInfo.contactInfo.label}</p>
                            <p className='secondary-title'>{businessInfo.contactInfo.value}</p>
                        </div>

                        <div className='operation-box'>
                            <p className='operation-title'>{businessInfo.operationInfo.label}</p>
                            <p className='secondary-title'>{businessInfo.operationInfo.value}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}