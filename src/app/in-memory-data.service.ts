import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Kid } from "./Classes/kid";
import { School } from "./Classes/school";
import { Teacher } from "./Classes/teacher";
import { Bus } from "./Classes/bus";
import { Time } from "./Classes/time";
import { Service } from "./Classes/service";

export class InMemoryDataService implements InMemoryDbService {
  // createDb() {
  //   var school = new Array<School>();
  //   school[0] = new School();
  //   school[0].name = "Scuola Uno"
  //   school[0].address = "Via Dante 1, Citta, Provincia"
  //   school[0].telephone = "0461256985"
  //   school[0].email = "scuolauno@mail.com"
  //   school[0].kids = [
  //     new Kid("RSSMRO", "Mario", "Rossi"),
  //     new Kid("VRDGVN","Giovanni", "Verdi"),
  //     new Kid("BNCLGI","Luigi", "Bianchi"),
  //   ];
  //   school[0].teachers = new Array<Teacher>();
  //   school[0].buses = new Array<Bus>();
  //   return {school};
  // }

  createDb() {
    var school = new School();
    school.name = "Scuola Uno"
    school.address = "Via Dante 1, Citta, Provincia"
    school.telephone = "0461256985"
    school.email = "scuolauno@mail.com"
    school.kids = [
      new Kid("RSSMRO", "Mario", "Rossi"),
      new Kid("VRDGVN","Giovanni", "Verdi"),
      new Kid("BNCLGI","Luigi", "Bianchi"),
    ];
    school.teachers = [
      new Teacher("FSTANT", "Antonello", "Fausti"),
      new Teacher("FSTLGI","Luigi", "Festi"),
      new Teacher("FRRMNL","Emanuela", "Ferri"),
    ]
    school.buses = [
      new Bus("bus1", "Povo"),
      new Bus("bus2", "Gardolo"),
      new Bus("bus3", "Rovereto")
    ];
    school.servizi = [
      new Service("default", [new Time("mattutina", new Date(0, 0, 0, 9), new Date(0, 0, 0, 13)), new Time("pomeridiana", new Date(0, 0, 0, 13), new Date(0, 0, 0, 16))]), //9.00 to 13.00
      new Service("anticipo", [new Time("Fascia unica", new Date(0, 0, 0, 8, 30), new Date(0, 0, 0, 9, 30))]), //9.00 to 13.00
      new Service("posticipo", [new Time("Fascia unica", new Date(0, 0, 0, 15, 30), new Date(0, 0, 0, 17, 30))]), //9.00 to 13.00
    ]
    school.sections = [
      "Sezione1",
      "Sezione2",
      "Sezione3",
      "Sezione4",
    ];
    school.assenze = [
      "Malattia",
      "Vaccinazione",
      "Vacanza"
    ];
    return {school};
  }

  //  createDb() {
  //   var school = new School(
  //     "Scuola Uno",
  //     "0461256985",
  //     "scuolauno@mail.com",
  //     "Via Dante 1, Citta, Provincia",
  //     [
  //       new Kid("RSSMRO", "Mario", "Rossi"),
  //       new Kid("VRDGVN","Giovanni", "Verdi"),
  //       new Kid("BNCLGI","Luigi", "Bianchi"),
  //     ],
  //     new Array<Teacher>(),
  //     new Array<Bus>()
  //   );
  //   return {school};
  //  }

    // createDb() {
    //   const kids = [
    //     // new Kid("RSSMRO", "Mario", "Rossi"),
    //     // new Kid("VRDGVN","Giovanni", "Verdi"),
    //     // new Kid("BNCLGI","Luigi", "Bianchi"),
    //     new Kid("BNDMRO", "Mario", "Biondi")
    //   ];
    //   return {kids};
    // }
}