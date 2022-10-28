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
        <div id={id} className="width-max-content w-100 my-auto mx-0 pt-4 pb-2 mb-2 blue-bg">
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
            <div className="d-flex mx-auto"
                style={maxWidth && {"max-width": maxWidth + "px"}}
                >
                <div className="carousel-arrow col-4 left-arrow" onClick={prevSlide}>←</div>
                <div className="col-4 d-flex">
                    <div className="my-auto mx-auto d-flex">
                        {images.map((img, idx) => 
                            <div>
                                {idx === active && (<div className="circle bg-green"/>)}
                                {idx !== active && (<div className="circle bg-white"/>)}
                            </div>)}
                    </div>
                </div>
                <div className="carousel-arrow col-4 right-arrow" onClick={nextSlide}>→</div>
            </div>
        </div>
    )
}
