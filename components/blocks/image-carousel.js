import Image from "next/image";
import { useState } from "react";

export default function ImageCarousel({images, id}) {
    const [active, setActive] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setActive(active === length - 1 ? 0 : active + 1);
    };
    
      const prevSlide = () => {
        setActive(active === 0 ? length - 1 : active - 1);
    };

    return (
        <div id={id} className="container position-relative">
            <div className="carousel-arrow left-arrow" onClick={prevSlide}>&lt;</div>
            <div className="carousel-arrow right-arrow" onClick={nextSlide}>&gt;</div>
            {images.map((img, idx) =>
                <div 
                    key={idx}>
                    {idx === active && (
                        <Image src={img.url}
                            width={img.width}
                            height={img.height}
                        />
                    )}
                </div> 
            )}
        </div>
    )
}
