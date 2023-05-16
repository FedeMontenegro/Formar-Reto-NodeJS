const fizzbuzz = (n) => {

    let list = []

    for (let i = 1; i <= n; i++) {

        switch (n !== 0) {
            case i % 5 === 0 && i % 3 === 0:
                list.push("FizzBuzz")
                break
            case i % 3 === 0:
                list.push("Fizz")
                break
            case i % 5 === 0:
                list.push("Buzz")
                break
            default:
                list.push(i)
                break
        }

    }
    return list
}

console.log(fizzbuzz(15))