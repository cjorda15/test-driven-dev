import {assert} from "chai"
import Animal from "../scripts/Animal.js"

describe("The animal", ()=>{
  const animal = new Animal("panda", "plant")

  it("should be an instance of the animal", ()=>{

    assert.instanceOf(animal, Animal)
  })

  it("should have a species and a type of food", ()=>{

    assert.equal(animal.species, "panda")
    assert.equal(animal.food, "plant")
  })

})
