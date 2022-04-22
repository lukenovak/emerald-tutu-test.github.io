import Image from 'next/image'
import { useState } from 'react'
import { Collapse } from 'react-bootstrap'

export default function Person({name, title, bio, photo}) {
    const [open, setOpen] = useState(false)
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
                <div className="col-6 my-auto">
                    <h4>{name}</h4>
                    <h5>{title}</h5>
                </div>
                <div className='col-2 my-auto'>
                    <button className='btn blue-bg' onClick={() => setOpen(!open)}>Bio</button>
                </div>
            </div>
            <Collapse in={open}>
                <div className='row'>
                    <p className="p-0">{bio}</p>
                </div>
            </Collapse>
        </div>
        
    )

}