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
  @Input() schoolId : string;
  school : School;
  edit:boolean = false;
  @Input() newTeacher : boolean;

  constructor(private webService : WebService) {}

  onSaveTeacher() {
    this.webService.addTeacher(this.schoolId, this.teacher).then(tmp => {console.log(tmp); this.school = tmp; this.teacher = tmp.teachers[tmp.teachers.length - 1];});
  }
}