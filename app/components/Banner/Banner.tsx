import './Banner.css';

import Image from 'next/image';

export default function Banner() {
    const bannerImage: string = "/images/banner/main_banner.png";
    
    return (
        <section className="banner-container">
            <Image
                src={bannerImage}
                alt="Banner Burguer"
                className="banner-image"
                width={1920}
                height={600}
                priority
            />

            <div className="group-btn">
                <button
                    className="banner-button order-button"
                    aria-label="Fazer Pedido"
                >
                    Fazer Pedido
                </button>

                <button
                    className="banner-button menu-button"
                    aria-label="Ver Cardápio"
                >
                    Ver Cardápio
                </button>
            </div>
        </section>
    );
}
