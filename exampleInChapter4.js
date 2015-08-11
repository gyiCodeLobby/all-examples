var cat = {
  "legs": 3,
  "name": "harmony",
  "color": "Tortoiseshell"
};

var cat =  {
  legs: 3,
  name: "harmaony",
  color:"tortoishell"
};

var cat = {
  legs: 3,
 "full name": "Harmony Philomena snuggly-Oants Morgan"
};

var cat = {legs: 3, name:"Harmony",color: "tortoisesell" };

console.log (cat["name"]);

console.log (cat.name);

var dog = {name: "pancake",age : 6,color:"white",bark: "yip yap yip"};
var cat = {name:"Harmony", age: 8,color: "tortoiseshell"};
console.log(Object.keys(dog));
console.log(Object.keys(cat));

var object = {};

var cat = {};
cat["legs"] = 3;
cat["name"] = "Harmony";
cat["color"] = "tortoiseshell";
console.log(cat);

var cat = {};
cat.legs = 3;
cat.name = "Harmony";
cat.color = "Tortoiseshell";

var dinosaurs = [
  {name: "Tryannosaurs Rex",period:"late Cretacous"},
  {name: "stegosaurus", period: "late Cretaceous"},
  {name: "plateosaurus",period: "triassic"}
];

console.log(dinosaurs[0]);

console.log(dinosaurs[0]["name"]);
console.log (dinosaurs[1].period);
var anna = {name: "Anna",age: 11,luckyNumbers: [2, 4, 8, 16]};
var dave = {name: "Dave", age: 15, luckyNumbers: [3, 9, 40]};
var kate = { name: "Kate", age: 9,luckyNumbers:[1, 2, 3]};

var friends = [anna, dave, kate];
console.log(friends[1]);
console.log(friends[2].name);
console.log(friends[0].luckyNumbers[1]);

var owedMoney = {};
owedMoney["Jimmy"] = 5;
owedMoney["Anna"] = 7;
console.log(owedMoney["Jimmy"]);

console.log(owedMoney["Jinen"]);

owedMoney["jimmy"] += 3;
console.log(owedMoney["jimmy"]);

console.log(owedMoney);

var movies = {
  "Finding Nemo": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
    format: "DVD"
  },
  "Star Wars:Episode VI - Return of jedi":{
    releaseDate: 1983,
    duration: 134,
    actors: ["Mark Hamill","harrison Ford","Carrie Fisher"],
    format: "DVD"
  },
  "Harry Potter and the Goblet": {
    releaseDate: 2005,
    duration: 157,
    actors: ["daniel radcliffe", "Emma Watson","Rupert Grint"],
    format: "blu-ray"
}
};
var findingNemo = movies["Finding Nemo"];
console.log(findingNemo.duration);
var cars = {
  releaseDate: 2006,
  duration: 177,
  actors: ["Owen Wilson","Bonnie Hurt", "Paul Newman"]
};
movies["Cars"] = cars;
console.log(Object.keys(movies));
