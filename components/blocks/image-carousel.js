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

    var maxHeight = 0;
    var maxWidth = 0;
    images.map((img) => {
        if (img.height > maxHeight) {
            maxHeight = img.height;
        }
        if (img.width > maxWidth) {
            maxWidth = img.width;
        }
    })

    return (
        <div id={id} className="container row">
            <div className="position-relative d-flex m-auto">
                <div className="carousel-arrow left-arrow" onClick={prevSlide}>&lt;</div>
                <div className="carousel-arrow right-arrow" onClick={nextSlide}>&gt;</div>
                {images.map((img, idx) => 
                        <div className="m-auto mw-100"
                            key={idx}>
                            {idx === active && (
                                <img src={img.url}
                                    alt={img?.altText}
                                />
                            )}
                            {img?.caption && <span>{img.caption}</span>}
                        </div>
                    )}
            </div>
        </div>
    )
}
