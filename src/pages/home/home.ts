import { Teacher } from './../../app/Classes/teacher';
import { Service } from './../../app/Classes/service';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import 'rxjs/add/operator/toPromise';
import { WebService } from "../../app/WebService";
import { School } from "../../app/Classes/school";
import { Kid } from "../../app/Classes/kid";
import { Time } from "../../app/Classes/time";
import { Bus } from "../../app/Classes/bus";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {
  settings: string = "profilo"

  searchQuery : string = '';

  schools : School[];
  selectedSchool : School;
  selectedId : string;
  
  selectedFascia : Time;
  selectedService : Service;

  selectedNames : string[];
  selectedSectionIndex : number;

  selectedBus: Bus;
  newB: boolean[] = [false];

  selectedTeacher: Teacher;
  newT:boolean[] = [false];
  edit:boolean;

  constructor(public navCtrl: NavController, private webService : WebService) {}

  getSchools() : void {
      this.webService.getData().then(item => { this.schools = item });
  }

  searchItems(ev: any) {
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.selectedSchool.kids = this.selectedSchool.kids.filter((item) => {
        var tmp = item.name + " " + item.surname;
        return (tmp.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ngOnInit(): void {
    this.getSchools()
  }

  onSelectFascia(fascia:Time, service:Service) {
    this.selectedFascia = fascia;
    this.selectedService = service;
  }

  onSelectSezione(names:string[], index:number) {
    this.selectedNames = names;
    this.selectedSectionIndex = index;
    console.log(names);
  }

  onSelectBus(bus:Bus) {
    this.selectedBus = bus;
  }

  onSelectTeacher(teacher: Teacher, edit) {
      teacher.id = teacher.id || "";
      teacher.name = teacher.name || "";
      teacher.surname = teacher.surname || "";
      teacher.cellphone = teacher.cellphone || "";
      teacher.telephone = teacher.telephone || "";
      teacher.email = teacher.email || "";
      teacher.section = teacher.section || [];
      teacher.pin = teacher.pin || "";
    this.selectedTeacher = teacher;
    this.selectedNames = this.selectedSchool.sections;
    this.edit = edit;
  }

  closeCard() {
    this.selectedBus = undefined;
    this.selectedFascia = undefined;
    this.selectedNames = undefined;
    this.selectedSectionIndex = undefined;
    this.selectedService = undefined;
    this.selectedTeacher = undefined;
  }

  onAddTeacher() {
    this.newT[0] = true;
    this.selectedTeacher = new Teacher("","","", "", "", "", [], "");
  }

  onAddBus() {
    this.newB[0] = true;
    this.selectedBus = new Bus("", "");
  }

  onSchoolChange(selectedId : string) {
    this.webService.getSchool(selectedId).then(item => { this.selectedSchool = item });
  }
}
