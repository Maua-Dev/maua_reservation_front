import { ModelError } from "../helpers/errors/model_error";

export class Student {
  name: string;
  ra: number;
  year: number;
  isWorking: boolean;

  constructor(name: string, ra: number, year: number, isWorking: boolean) {

    this.name = name;

    if(ra < 10000000){
        throw new ModelError('ra');
    }
    this.ra = ra;

    this.year = year;
    this.isWorking = isWorking;
  }
}
