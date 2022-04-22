import Image from 'next/image'

export default function Person({name, title, bio, photo}) {
    return (
        <div className="container p-0 my-3">
            <div className="row mb-3">
                {photo && (
                    <div className="col-4 p-0 blue-border d-flex">
                        <Image 
                            src={photo.url}
                            height={photo.height}
                            width={photo.width}
                        />
                    </div>
                )}
                <div className="col-8 my-auto">
                    <h4>{name}</h4>
                    <h5>{title}</h5>
                </div>
            </div>
            <div className='row'>
                <p className="p-0">{bio}</p>
            </div>
        </div>
        
    )

}