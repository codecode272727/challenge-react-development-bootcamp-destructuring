console.log("Hello")

const owner = "nicholas"

const car = {
    brand: "Tesla",
    model: "model x",
    [owner]: {
        age: 21,
        gender: "male",

    },

    drive: function () {
        console.log(`pssstttt`)
    }

}
console.log(car.brand)
console.log(car['model'])
console.log(car.nicholas)

car.drive()
car['drive']()



const Hello = () => {
    console.log("Hello world")
}

let addAndMultiply = (x, y, z) => ((x + y) * z)

console.log(addAndMultiply(4, 8, 5))


let selfIntro = (name, hobby, count) => { console.log(`My name is ${name}. I practice ${hobby} ${count} times a day!`) }

selfIntro('Shangyeet', 'Kendama', '18')




const prices = [1.00, 2.00, 3.00, 4.00]
const gst = 0.06
// const pricesWithTax = prices.map(function (prices) {
// return prices * 1.06
// });
// 
// console.log(pricesWithTax)

// const pricesWithTax = prices.forEach(function (price) {
// 
// return gst * price + price
// });
// console.log(pricesWithTax)

// const pricesWithTax = []
// prices.forEach(function (price) {
// pricesWithTax.push(gst * price + price)
// });
// 
// console.log(pricesWithTax)





const getState = state => {
    let logState = () => { console.log('Your state is ' + state) };
    return [state, logState]

}

const [state, logState] = getState('stable')
console.log(state)

logState()