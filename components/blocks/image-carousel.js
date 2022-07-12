import { useState } from "react";
import Image from "./image";

export default function ImageCarousel({images, id, maxWidth}) {
    const [active, setActive] = useState(0);
    const length = images.length;

    const nextSlide = () => {
        setActive(active === length - 1 ? 0 : active + 1);
    };
    
      const prevSlide = () => {
        setActive(active === 0 ? length - 1 : active - 1);
    };

    return (
        <div id={id} className="container row width-max-content m-auto mb-2">
            <div className="position-relative d-flex m-auto">
                <div className="carousel-arrow left-arrow" onClick={prevSlide}>&lt;</div>
                <div className="carousel-arrow right-arrow" onClick={nextSlide}>&gt;</div>
                {images.map((img, idx) => 
                    <div className="m-auto"
                        style={maxWidth && {"max-width": maxWidth + "px"}}
                        key={idx}
                    >
                        {idx === active && (
                            <Image {...img}/>
                        )}
                    </div>)}
            </div>
        </div>
    )
}
