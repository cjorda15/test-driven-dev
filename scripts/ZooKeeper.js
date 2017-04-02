import Animal from "../scripts/Animal.js"

export default class ZooKeeper {
  constructor(name) {
    this.name   = name
    this.animals = []
    this.foodItems = []
    this.fridge = {
      bamboo: 'plant',
      steak: 'meat',
      corn: 'plant',
      pork: 'meat',
      zeebra: 'meat',
      alpaca: 'meat'
    };
  }
  addAnimal(animal) {
    animal===undefined ? null:this.animals.push(animal)
  }

  grabFood(food) {
    return Object.keys(this.fridge).map(foods =>{
      if (food == this.fridge[foods]) {
        this.foodItems.push({[foods]: food})
      }
    })
  }

  feedAnimal(animal, food) {
    if(animal==="lion"){
      if(food!=="meat"){
        return 'lions don\'t eat '+food
      }
      else{
        animal.stomach.stomach.push("grr")
        return "you fed the lion meat!"
      }
    }
    if(animal==="panda"){
      if(food!=="bamboo"){
        return 'pandas don\'t eat '+food
      }
      else{
        animal.stomach.stomach.push("grr")

        return "you fed the panda bamboo!"
      }
    }
  }
}
