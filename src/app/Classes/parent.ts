import { Component } from '@angular/core';
import { Person } from "./person";

@Component({
  
})

export class Parent extends Person {
    cellphone: string;
    telephone: string;
    email: string;
    constructor(id:string, name:string, surname:string, cellphone?:string, telephone?:string, email?:string) {
        super(id, name, surname);
        this.cellphone = cellphone;
        this.telephone = telephone;
        this.email = email;
    }
}
