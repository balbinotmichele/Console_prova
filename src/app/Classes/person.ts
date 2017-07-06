import { Component } from '@angular/core';

@Component({
  
})

export class Person {
    id: string;
    name: string;
    surname: string;
    

    constructor(id:string, name:string, surname:string) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
}
