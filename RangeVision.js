const sumRange = (n, valueOfRange, ID) => {

    let nToString = n.toString()
    let result = 0

    //Obtengo la suma de los valores ubicados a la "izquierda" de valueOfRange
    nToString
        .substring(ID - valueOfRange, ID)
        .split("")
        .map(e => (
            result += parseInt(e)
        ))

    //Obtengo la suma de los valores ubicados a la "derecha" de valueOfRange
    nToString
        .substring(ID + 1, (ID + 1) + parseInt(valueOfRange))
        .split("")
        .map(e => (
            result += parseInt(e)
        ))

    return result
}

const minRange = (list) => {

    let res = 99999999

    for (const iterator of list) {

        if (res > iterator.range) {
            res = iterator.range
        }
    }

    return res
}


const rangeVision = (n) => {

    let range = []

    n
        .toString()
        .split("")
        .map((element, i) => {

            range.push({
                ID: i,
                value: parseInt(element),
                isOne: parseInt(element) === 1,
                range: sumRange(n, element, i)
            })
        })

    range = range.filter(element => element.isOne) 

    return range?.some((element) => element.range === minRange(range))
}

console.log("RangeVision: ", rangeVision(34315))