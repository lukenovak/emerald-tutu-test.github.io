export default function Picture({photo, altText, caption}) {
    return (
        <div className="container text-center">
            <img
                src={photo.url}
                height={photo.height}
                width={photo.width}
                alt={altText} // TODO: add alt text to pictures
            />
            {caption && <span className="row">{photo.caption}</span>} 
        </div>
    )
}
