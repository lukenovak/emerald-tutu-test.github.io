import Image from 'next/image'

export default function Picture({photo}) {
    return (
        <div class="container text-center">
            <Image 
                src={photo.url}
                height={photo.height}
                width={photo.width}
            />
        </div>
    )
}
