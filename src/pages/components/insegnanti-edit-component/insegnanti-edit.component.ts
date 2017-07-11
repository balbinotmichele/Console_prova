import { School } from './../../../app/Classes/school';
import { WebService } from './../../../app/WebService';
import { Teacher } from './../../../app/Classes/teacher';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'insegnanti-edit',
  templateUrl: "insegnanti-edit-component.html",
  styles: [`
    input:disabled, ion-select:disabled, .select-disabled, .item-select-disabled ion-label {
      opacity:1;
    }
  `]
})

export class InsegnanteEditComponent {
  @Input() teacher: Teacher;
  @Input() sections : string[];
  @Input() school : School;
  @Input() edit:boolean;
  @Input() newTeacher : boolean[];

  constructor(private webService : WebService) {}

  onSaveTeacher() {
    if(this.teacher.id !== "" && this.teacher.name !== "" && this.teacher.surname !== "") {
      this.webService.addTeacher(this.school.id, this.teacher)
      .then(tmp => {
        console.log(tmp); 
        this.teacher = tmp.teachers[tmp.teachers.length - 1]; 
        this.school.teachers.push(this.teacher); 
        this.newTeacher[0] = false; 
        this.edit = false
      });
    }
  }

  onCancel() {
    console.log(this.newTeacher);
    this.teacher = undefined;
  }
}