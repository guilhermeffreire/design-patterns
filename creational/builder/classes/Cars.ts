class Cars {
  optionals: string[] = [];

  listAllOptionals(): void {
    console.log(`Cars optionals: ${this.optionals.join(", ")}\n`);
  }
}

export default Cars;
