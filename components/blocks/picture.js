export default function Picture({photo}) {
    return (
        <div className="container text-center">
            <img 
                src={photo.url}
                height={photo.height}
                width={photo.width}
                alt="picture" // TODO: add alt text to pictures
            />
        </div>
    )
}
