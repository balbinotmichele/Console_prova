import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import 'rxjs/add/operator/toPromise';
import { WebService } from "../../app/WebService";
import { School } from "../../app/Classes/school";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  searchQuery: string = '';
  teachers: string[];
  buses : string[];
  school:School;

  initializeItems() {
    this.webService.getSchool().then(item => console.log(item));
    
    this.teachers = [
      "Antonello Fausti",
      "Luigi Festi",
      "Emanuela Ferri"
    ]
    
    this.buses = [
      "bus1",
      "bus2",
      "bus3"
    ]
  }
  

  constructor(public navCtrl: NavController, private webService : WebService) {
    this.initializeItems();
  }

  searchItems(ev: any) {
    this.initializeItems();
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.school.kids = this.school.kids.filter((item) => {
        var tmp = item.name + " " + item.surname;
        return (tmp.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}

window.onclick = () => {
    // document.getElementById("schoolTel").setAttribute("href", this.school.telephone)
    // document.getElementById("schoolTel").innerHTML = this.school.telephone;
    // document.getElementById("schoolEmail").setAttribute("href", this.school.email)
    // document.getElementById("schoolEmail").innerHTML = this.school.email;
}
