// circle with size in pt
export default function Circle({size}) {
    const styleSize = size + "pt"
    return <div className="blue-bg circle" style={{ minWidth:styleSize, minHeight: styleSize}}/>
}