import CarBuilder from "./classes/CarBuilder";
import Director from "./classes/Director";

function clientCode(director: Director) {
  const builder = new CarBuilder();
  director.setBuilder(builder);

  console.log("Make Simple Car");
  director.makeSimpleCar();
  builder.getDetailsCar().listAllOptionals();

  console.log("Make Full Optionals Car");
  director.makeFullCar();
  builder.getDetailsCar().listAllOptionals();

  console.log("Custom car");
  builder.setGps();
  builder.setEngine();
  builder.getDetailsCar().listAllOptionals();
}

const carDirector = new Director();
clientCode(carDirector);
