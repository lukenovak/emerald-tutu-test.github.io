// Converts single digit number to enclosed numbers
export default function circleNum(number) {
    return number == 0 ? '\u24EA' : String.fromCharCode(9311 + number)
}
