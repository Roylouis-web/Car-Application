import { belongsTo, createServer, hasMany, Model, RestSerializer } from 'miragejs';

createServer({
  models: {
    cars: Model.extend({
      hosts: belongsTo(),
    }),
    hosts: Model.extend({
      cars: hasMany(),
    }),
  },

  serializers: {
    cars: RestSerializer.extend({
       include: ["hosts"],
       embed: true, 
    }),
  },
  seeds(server) {
    server.create("car", { hostId: "1", name: "Mitsubishi", price: 500, imageUrl: "/images/cars/classic-mitsubishi.jpg", type: "classic", description: "The Mitsubishi car is one of our most classic offers.The car is very compact and has a nice and modern look which will leave you daunted and will always render your outing a bliss because of the fact that it fits in several occassions." });
    
    server.create("car", { hostId: "2", name: "Ferrari La Ferrari", price: 650, imageUrl: "/images/cars/classy-ferrari.jpg", type: "luxury", description: "The Ferrari La Ferrari is a very fancy and modern looking vehicle which could be used for several outings and offers a lot to the table ranging from speed, design, strenght and portability" });

    server.create("car", { hostId: "3", name: "Bugatti", price: 700, imageUrl: "/images/cars/clean-buggatti.jpg", type: "luxury", description: "A top quality car that will always keep you smiling. It has a lot to offer and you won't regret renting this vehicle. It comes with a very slick design and a very powerful engine which allows your enjoy your ride at top speed." });

    server.create("car", { hostId: "4", name: "Bugatti Prime", price: 850, imageUrl: "/images/cars/gold-audi.jpg", type: "luxury", description: "The vehicle is a superset of the bugatti vehicle. Just when you thought it couldn't get any better, Bugatti Prime offers a lot more than its predecessor. It looks a lot like its predecessors but has an even more slicker design and a more combustible engine, giving you one of the best joyrides nevr to be forgotten." });

    server.create("car", { hostId: "5", name: "Hummer", price: 400, imageUrl: "/images/cars/hummer.webp", type: "rugged", description: "If you're worried that the destination of your journey is not a smooth path and can't think of a ride to help you with your wish, then the Hummer vehicle is just what you need. The hummer is very powerful and rugged vehicle which is very befitting for journeys to rugged places like desserts, mountains or even wild life adevntures in the savannah. Worry less it journeying to the aforementioned places with you've got Hummer around." });

    server.create("car", { hostId: "6", name: "Lamborghini Urus", price: 900, imageUrl: "/images/cars/lamborghini.jpg", type: 'classic', description: "The Lamborghini Urus is best known for its speed and design. This car adds a great deal of excitement to your journey as it offers a very smooth ride due to its rare type of engine making your trip one to never forget." })

    server.create("car", { hostId: "7", name: "Porsche", price: 650, imageUrl: "/images/cars/porsche.jpg", type: 'classic', description: "Porsche is a legacy vehicle that will keep you smiling and won't have you having second thoughts about choosing it. It has a modern and classic design, a top notch look both on the interior and the exterior, and a very portable size, fit for various kinds of occassions." });

    server.create("car", { hostId: "8", name: "Rolls Royce", price: 1000, imageUrl: "/images/cars/Rolls-Royce.jpg", type: "rugged", description: "The Rolls Royce is one of the most famous vehicles in the world. It's not very large but very comfortable and maintains a balance between speed and design. It may not look very sleek on the outside, but definitely top notch on the inside and very spacious." });

    server.create("car", { hostId: "9", name: "G-Wagon Prime", price: 1100, imageUrl: "/images/cars/white-g-wagon.jpg", type: "rugged", description: "This superb SUV is one of the most loved amongst the products of the Mercedes Benz Company. It is such a prestigious ride to be in and has a lot classic qualities ranging from its size, color, interior and exterior design, and finally its relatively average speed. This vehicle will not let you down in any event you plan on taking it out for." });

    server.create("car", { hostId: "10", name: "Ferrari F40", price: 950, imageUrl: "/images/cars/white-ride.webp", type: "classic", description: "If you've tried out the Ferrari La Ferrari then you'd nonetheless love this vehicle as well and would be surprise to find out how similar they both are. The Ferrari F40 is one of our collections of Ferrari brands and has offered a great deal satisfaction to all that has chosen it, so do not hesitate to join in that list of satisfied customers." });
  },
  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/cars", (schema, request) => {
      return schema.cars.all();
    });

    this.get("/cars/:id", (schema, request) => {
      return schema.cars.find(request.params.id);
    });

    this.get("/host", (schema, request) => {
      return schema.hosts.all();
    });

    this.get("/host/cars", (schema, request) => {
    return schema.cars.where({ hostId: "1"});
    });

    this.get("/host/cars/:id", (schema, request) => {
      const id = request.params.id;
      return schema.cars.where({ id, hostId: "1"});
    });
  }
});