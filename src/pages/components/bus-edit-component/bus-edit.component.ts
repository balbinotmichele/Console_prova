import { Bus } from './../../../app/Classes/bus';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'bus-edit',
  templateUrl: "bus-edit-component.html"
})

export class BusEditComponent {
  @Input() bus: Bus;
}