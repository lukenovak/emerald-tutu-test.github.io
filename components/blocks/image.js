export default function Image({image, altText, caption}) {
    return (
        <div className="w-100 d-flex flex-wrap">
            <img className="mw-100" 
                src={image.url}
                alt={altText}
            />
            {caption && <span className="mx-auto h6">{caption}</span>}
        </div>
    )
}