class Car {

    #color = null
    #spoiler = null
    #fuelType = null
    #productionDate = null

    static RaceCarBuilder = class {
        #color = null
        #productionDate = null

        setColor(color) {
            this.#color = color
            return this
        }

        setProductionDate(date) {
            this.#productionDate = date
            return this
        }

        build() {
            return new Car.Builder()
                .setColor(this.#color)
                .setProductionDate(this.#productionDate)
                .withPetrolFuelType()
                .withSpoiler()
                .build()
        }
    }

    static Builder = class {
        #color = null
        #spoiler = null
        #fuelType = null
        #productionDate = null

        setColor(color) {
            this.#color = color
            return this
        }

        setSpoiler(spoiler) {
            this.#spoiler = spoiler
            return this
        }

        setFuelType(fuelType) {
            this.#fuelType = fuelType
            return this
        }

        setProductionDate(date) {
            this.#productionDate = date
            return this
        }

        // more readable API
        withSpoiler() {
            this.#spoiler = true
            return this
        }

        withOutSpoiler() {
            this.#spoiler = false
            return this
        }

        // enforce enum options
        withPetrolFuelType() {
            this.#fuelType = 'petrol'
            return this
        }

        withDieselFuelType() {
            this.#fuelType = 'diesel'
            return this
        }

        // enforce type
        setProductionDate(date) {
            // check if `date` is a `Date` object, and that it
            // is a valid date (isNan should be false)
            if (!(date instanceof Date) || isNaN(date)) {
                // if our conditions fail, throw an error
                throw new Error('invalid production date')
            }
            this.#productionDate = date
            return this
        }

        build() {
            const car = new Car(
                this.#color,
                this.#spoiler,
                this.#fuelType,
                this.#productionDate)
            return car
        }
    }

    constructor(color, spoiler, fuelType, productionDate) {
        this.#color = color
        this.#spoiler = spoiler
        this.#fuelType = fuelType
        this.#productionDate = productionDate
    }

    toString() {
        return `color: ${this.#color}
spoiler: ${this.#spoiler}
fuel type: ${this.#fuelType}
production date: ${this.#productionDate}`
    }
}

const car = new Car.Builder()
    .setColor('red')
    .withPetrolFuelType()
    .setProductionDate(new Date('2021-09-21'))
    .setSpoiler(false)
    .build()

console.log(car.toString())

const raceCar = new Car.RaceCarBuilder()
    .setColor('green')
    .setProductionDate(new Date('2021-09-21'))
    .build()

console.log(raceCar.toString())