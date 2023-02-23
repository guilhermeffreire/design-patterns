import Singleton from "./singleton";

const singletonOne = Singleton.getInstance();
const singletonTwo = Singleton.getInstance();

console.log(singletonOne === singletonTwo);
