import { Component } from '@angular/core';
import { Person } from "./person";

@Component({
  
})

export class Teacher extends Person {
    section: string;
    pin: string;

    constructor(id:string, name:string, surname:string, cellphone?:string, telephone?:string, email?:string, section?:string, pin?:string) {
        super(id, name, surname);
        this.section = section;
        this.pin = pin;
    }
}