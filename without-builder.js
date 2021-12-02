class Car {
    // these attributes will be private, so we prefix them with `#`
    #color = null
    #spoiler = null
    #fuelType = null
    #productionDate = null

    constructor(color, spoiler, fuelType, productionDate) {
        this.#color = color
        this.#spoiler = spoiler
        this.#fuelType = fuelType
        this.#productionDate = productionDate
    }

    // we should be able to print information about the car according to its parameters
    toString() {
        return `color: ${this.#color}
spoiler: ${this.#spoiler}
fuel type: ${this.#fuelType}
production date: ${this.#productionDate}`
    }
}

// we can now construct an instance and print it to the console
const car = new Car('red', true, 'petrol', new Date('2020-09-21'))

console.log(car.toString())