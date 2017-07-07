import { Service } from './../../../app/Classes/service';
import { Component, Input } from '@angular/core';
import { Time } from "../../../app/Classes/time";

@Component({
  selector: 'orario-edit',
  templateUrl: "orario-edit-component.html"
})

export class OrarioEditComponent {
  @Input() fascia: Time;
  @Input() servizio : Service;
}