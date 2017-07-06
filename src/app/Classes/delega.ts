import { Component } from '@angular/core';
import { Person } from "./person";

@Component({
  
})

export class Delega extends Person {
    cellphone: string;
    telephone: string;
    email: string;
    legame: string;

    constructor(id:string, name:string, surname:string, cellphone?:string, telephone?:string, email?:string, legame?:string) {
        super(id, name, surname);
        this.cellphone = cellphone;
        this.telephone = telephone;
        this.email = email;
        this.legame = legame;
    }
}
