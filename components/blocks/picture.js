import Image from 'next/image'

export default function Picture({picture}) {
    return (
        <div class="container text-center">
            {picture.map((photo) => 
                <Image 
                    src={photo.url}
                    height={photo.height}
                    width={photo.width}
                />)}
        </div>
    )
}
