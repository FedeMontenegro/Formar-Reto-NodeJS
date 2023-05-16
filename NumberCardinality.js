const numberCardinality = (n) => {

    switch (n !== undefined) {
        case n.toString().endsWith("0"):
            return "Zero"
        case n.toString().endsWith("5"):
            return "Five"
        case n % 2 === 0 && !(n.toString().endsWith("5")):
            return "Even"
        case n % 2 !== 0 && !(n.toString().endsWith("5")):
            return "Odd"
        default:
            return -1
    }

}

console.log(numberCardinality(99))