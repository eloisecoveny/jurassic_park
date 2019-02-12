const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  beforeEach(function () {
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('stegosaurus', 'herbivore', 35);
    dinosaur3 = new Dinosaur('brachiosaurus', 'herbivore', 45);
    dinosaur4 = new Dinosaur('t-rex', 'carnivore', 20);
    dinosaur5 = new Dinosaur('triceratops', 'herbivore', 30);

    collection = [dinosaur1, dinosaur2, dinosaur3, dinosaur4, dinosaur5]

    park = new Park("Jurassic Park", 25, collection);
  })

  it('should have a name', function(){
    actual = park.name;
    assert.strictEqual(actual, "Jurassic Park")
  });

  it('should have a ticket price', function(){
    actual = park.ticketPrice;
    assert.strictEqual(actual, 25);
  });

  it('should have a collection of dinosaurs', function(){
    actual = park.dinosaurCollection.length;
    assert.deepStrictEqual(actual, 5);
  });

  it('should be able to add a dinosaur to its collection', function(){
    dinosaur6 = new Dinosaur('diplodocus', 'herbivore', 40);
    park.addDinosaur(dinosaur6);
    actual = park.dinosaurCollection.length;
    assert.deepStrictEqual(actual, 6);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dinosaur5);
    actual = park.dinosaurCollection.length;
    assert.deepStrictEqual(actual, 4);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    actual = park.mostPopularDinosaur();
    assert.strictEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    actual = park.dinosaurOfSpecies("t-rex");
    assert.deepStrictEqual(actual, [dinosaur1, dinosaur4]);
  });

  it('should be able to calculate the total number of visits per day', function(){
    actual = park.totalVisitsPerDay();
    assert.strictEqual(actual, 180);
  });

  it('should be able to calculare the total number of visits per year', function(){
    actual = park.totalVisitsPerYear();
    assert.strictEqual(actual, 64800);
  });

  it('should be able to calculate the total revenue from ticket sales in one year', function(){
    actual = park.totalTicketRevenuePerYear();
    assert.strictEqual(actual, 1620000);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.removeDinosaursBySpecies("t-rex");
    actual = park.dinosaurCollection.length;
    assert.strictEqual(actual, 3);
  });

  it('should be able to create an object storing the tally of dinosaur diets', function(){
    actual = park.dinosaurDiets();
    expected = { 'carnivore': 2, 'herbivore': 3, 'omnivore': 0 }
    assert.deepStrictEqual(actual, expected);
  });

});
