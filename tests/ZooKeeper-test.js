
import {assert} from "chai"
import ZooKeeper from "../scripts/ZooKeeper"
import Animal from "../scripts/Animal.js"
const locus = require("locus")

describe("The ZooKeeper", ()=>{
  var zookeeper = new ZooKeeper("Danger")
  var animal    = new Animal("panda", "plant")

  it("should be a instance of a ZooKeeper", ()=>{

    assert.instanceOf(zookeeper, ZooKeeper)
  })

  it("should have a name", ()=>{

    assert.equal(zookeeper.name, "Danger")
  })

  it("should have a list of animals", ()=>{
    assert.deepEqual(zookeeper.animals, [])
  })

  it("should be able to add animals", ()=>{
    assert.equal(zookeeper.animals.length, 0)

    zookeeper.addAnimal(animal)

    assert.equal(zookeeper.animals.length, 1)
    assert.deepEqual(zookeeper.animals, [animal])
    assert.equal(zookeeper.animals[0].species, "panda")
  })

  it("should be able to grab food from the fridge", ()=>{
    assert.deepEqual(zookeeper.foodItems, [])
    zookeeper.grabFood("plant")

    assert.deepEqual(zookeeper.foodItems, [{bamboo: 'plant'}, {corn: 'plant'}])

  })

  it("should be able to feed the animals", ()=>{
    let meeka = new Animal('lion', 'meat')

    zookeeper.addAnimal(meeka)

    assert.equal(zookeeper.feedAnimal('lion', 'bamboo'), "lions don't eat bamboo")
    assert.equal(zookeeper.feedAnimal('panda', 'bamboo'), "you fed the panda bamboo!")
    assert.equal(zookeeper.animals[0].stomach, {stomach: [ { bamboo: 'plant'} ] })
  })

})
