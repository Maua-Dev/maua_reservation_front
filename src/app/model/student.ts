
export class Student {
  name: string;
  ra: number;
  year: number;
  isWorking: boolean;

  constructor(name: string, ra: number, year: number, isWorking: boolean) {

    this.name = name;

    this.ra = ra;

    this.year = year;
    
    this.isWorking = isWorking;
  }

  static empty(){
    return new Student("", 0, 0, false);
  }
}
