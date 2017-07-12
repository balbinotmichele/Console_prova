import { WebService } from './../../../app/WebService';
import { Bus } from './../../../app/Classes/bus';
import { Component, Input } from '@angular/core';
import { School } from "../../../app/Classes/school";

@Component({
  selector: 'bus-edit',
  templateUrl: "bus-edit-component.html"
})

export class BusEditComponent implements SaveCancel {
  @Input() bus: Bus;
  @Input() school : School;
  @Input() edit:boolean;
  @Input() newBus : boolean[];

  constructor(private webService : WebService) {}

  onSave() {
    if(this.bus.id !== "" && this.bus.capolinea !== "") {
      this.webService.add(this.school.id, this.bus)
      .then(tmp => {
        this.bus = tmp.buses[tmp.teachers.length - 1]; 
        this.school.buses.push(this.bus); 
        this.newBus[0] = false; 
        this.edit = false
      });
    }
  }

  onCancel() { //da finire
    this.bus = undefined;
  }
}