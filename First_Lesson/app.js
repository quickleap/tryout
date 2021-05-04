//The event module
var events = require("events");
var util = require("util");

var Person = function (name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person("James");
var ryu = new Person("Ryu");
var mary = new Person("Mary");
//Store the names in an array
var people = [james, ryu, mary];

people.forEach(function (person) {
  person.on("speak", function (mssg) {
    console.log(person.name + " said: " + mssg);
  });
});

james.emit("speak", "hello dudes");
ryu.emit("speak", "hello");
mary.emit("speak", "doing great");
