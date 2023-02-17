export default function Image({image, altText, caption}) {
    return (
        <div>
            <img className="mw-100" 
                src={image.url}
                alt={altText}
            />
            {caption && <div className="text-center mt-2"><span className="h6">{caption}</span></div>}
        </div>
    )
}