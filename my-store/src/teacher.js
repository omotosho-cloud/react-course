import { Person } from "./class Person ";
export function promote () {

}
export class Teacher extends Person{
  constructor (name, degree){
    super(name);
    this.degree = degree;
  }
  teach( ) {
    console.log('teach');
  }
}
