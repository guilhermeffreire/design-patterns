import { IBuilder } from "../interfaces/I-Builder";
import Cars from "./Cars";

class CarBuilder implements IBuilder {
  private car: Cars;

  constructor() {
    this.reset();
  }

  reset(): void {
    this.car = new Cars();
  }

  setSeats(): void {
    this.car.optionals.push("Seats added");
  }
  setEngine(): void {
    this.car.optionals.push("Engine added");
  }

  setGps(): void {
    this.car.optionals.push("GPS Added");
  }

  getDetailsCar(): Cars {
    const car = this.car;
    this.reset();

    return car;
  }
}

export default CarBuilder;
