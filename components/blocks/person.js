import Circle from '../circle'

export default function Person({name, title, bio, photo}) {
    return (
        <div className="p-0 my-3">
            <div className="mb-3">
                {/* photo currently unused. find out if we still need this
                photo && (
                    <div className="col-4 p-0 person-mh blue-border d-flex">
                        <img
                            className="mw-100 mh-100"
                            src={photo.url}
                            alt={name}
                        />
                    </div>
                ) */}
                <div className="d-flex font-monument mb-3">
                    <Circle size="22"/>
                    <h3 className='ms-3 my-auto fw-bold'>{name}, {title}</h3>
                </div>
            </div>
            <div className='mx-auto'>
                <p>{bio}</p>
            </div>

        </div>
        
    )

}