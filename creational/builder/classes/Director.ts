import { IBuilder } from "../interfaces/I-Builder";

class Director {
  private builder: IBuilder;

  setBuilder(builder: IBuilder) {
    this.builder = builder;
  }

  makeSimpleCar(): void {
    this.builder.setEngine();
    this.builder.setSeats();
  }

  makeFullCar(): void {
    this.builder.setEngine();
    this.builder.setSeats();
    this.builder.setGps();
  }
}

export default Director;
