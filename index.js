function Scooter(year, color, model) {
  this.year = year
  this.color = color
  this.model = model
}
const scooter = new Scooter()

function Driver(name, age, experience) {
  this.name = name
  this.age = age
  this.experience = experience
}

const driver = new Driver()

function PickupLocation(address, city) {
  this.address = address
  this.city = city
}

const location = new PickupLocation()
