import { WebService } from './../../../app/WebService';
import { Teacher } from './../../../app/Classes/teacher';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'insegnanti-edit',
  templateUrl: "insegnanti-edit-component.html"
})

export class InsegnanteEditComponent {
  @Input() teacher: Teacher;
  @Input() sections : string[];

  save (){
    // this.webService.create() //da finire
  }

  constructor(webService : WebService) {}
}