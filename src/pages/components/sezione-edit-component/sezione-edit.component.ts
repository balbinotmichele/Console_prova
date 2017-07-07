import { Bus } from './../../../app/Classes/bus';
import { Component, Input, OnInit } from '@angular/core';
import { Time } from "../../../app/Classes/time";

@Component({
  selector: 'sezione-edit',
  templateUrl: "sezione-edit-component.html"
})

export class SezioneEditComponent {
  @Input() names : string[];
  @Input() index: number;
}