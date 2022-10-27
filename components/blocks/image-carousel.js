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
        <div id={id} className="row width-max-content w-100 m-auto pt-4 pb-2 mb-2 blue-bg">
            <div className="m-auto">
                {images.map((img, idx) => 
                    <div
                        className="m-auto"
                        style={maxWidth && {"max-width": maxWidth + "px"}}
                        key={idx}
                    >
                        {idx === active && (
                            <Image {...img}/>
                        )}
                    </div>)}
            </div>
            <div className="d-flex">
                <div className="carousel-arrow col-4 left-arrow" onClick={prevSlide}>←</div>
                <div className="col-4 d-flex">
                    <div className="my-auto mx-auto d-flex">
                        {images.map((img, idx) => <div className="circle"/>)}
                    </div>
                </div>
                <div className="carousel-arrow col-4 right-arrow" onClick={nextSlide}>→</div>
            </div>
        </div>
    )
}
