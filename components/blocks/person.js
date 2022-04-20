import Image from 'next/image'

export default function Person({name, title, bio, photo}) {
    console.log(photo)
    return (
        <div className="row">
            {photo && (
                <div className="col-4 blue-border">
                    <Image 
                        src={photo.url}
                        height={photo.height}
                        width={photo.width}
                    />
                </div>
            )}
            <div className="col-8">
                <h4>{name}</h4>
                <h5>{title}</h5>
                <p>{bio}</p>
            </div>
        </div>
    )

}