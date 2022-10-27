import * as Blocks from '@/blocks'

export default function Section({name, contents}) {
    return(
        <div className="container-fluid anchor mb-4 g-0" id={name}>
            <h2 className="font-monument text-center">{name}</h2>
            {contents.map((block) => {
                const Component = Blocks[block.__typename]

                if (!Component) return null

                return <Component key={block.id} {...block} />
            })}
        </div>
    )
}
