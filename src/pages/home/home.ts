import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import 'rxjs/add/operator/toPromise';
import { WebService } from "../../app/WebService";
import { School } from "../../app/Classes/school";
import { Kid } from "../../app/Classes/kid";
import { Time } from "../../app/Classes/time";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {
  searchQuery : string = '';

  school : School;
  
  selectedFascia : Time;
  selectedService : string;

  selectedName : string;

  constructor(public navCtrl: NavController, private webService : WebService) {}

  getKids() : void {
    this.webService.getData().then(item => {console.log(item); this.school = item});
  }

  searchItems(ev: any) {
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.school.kids = this.school.kids.filter((item) => {
        var tmp = item.name + " " + item.surname;
        return (tmp.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ngOnInit(): void {
    this.getKids()
  }

  onSelectFascia(fascia:Time, service:string) {
    this.selectedFascia = fascia;
    this.selectedService = service;
  }

  onSelectSezione(name:string) {
    this.selectedName = name;
  }
}
