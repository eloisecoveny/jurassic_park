const Park = function(name, ticketPrice, dinosaurCollection){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurCollection = dinosaurCollection
};

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurCollection.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur){
  const index = this.dinosaurCollection.indexOf(dinosaur);
  this.dinosaurCollection.splice(index, 1);
}

Park.prototype.mostPopularDinosaur = function(){
  const sortedDinosaurs = this.dinosaurCollection.sort(function(a, b){
    b.guestsAttractedPerDay - a.guestsAttractedPerDay;
  });
  return sortedDinosaurs[0];
};

Park.prototype.dinosaurOfSpecies = function(species){
  let dinosaursOfSpecies = [];
  for(dinosaur of this.dinosaurCollection){
    if(dinosaur.species === species){
      dinosaursOfSpecies.push(dinosaur);
    };
  };
  return dinosaursOfSpecies;
};

Park.prototype.totalVisitsPerDay = function(){
  let total = 0;
  for(dinosaur of this.dinosaurCollection){
    total += dinosaur.guestsAttractedPerDay;
  };
  return total;
};

Park.prototype.totalVisitsPerYear = function(){
  return this.totalVisitsPerDay() * 360;
};

Park.prototype.totalTicketRevenuePerYear = function(){
  return this.totalVisitsPerYear() * this.ticketPrice;
};

Park.prototype.removeDinosaursBySpecies = function(species){
  for(dinosaur of this.dinosaurOfSpecies(species)){
    this.removeDinosaur(dinosaur);
  };
};

Park.prototype.dinosaurDiets = function(){
  diets = {'carnivore': 0, 'herbivore': 0, 'omnivore': 0};
  for(dinosaur of this.dinosaurCollection){
    for(key in diets){
      if(dinosaur.diet === key){
        diets[key] += 1;
      };
    };
  };
  return diets;
};

module.exports = Park
