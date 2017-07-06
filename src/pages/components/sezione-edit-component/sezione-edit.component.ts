import { Component, Input } from '@angular/core';
import { Time } from "../../../app/Classes/time";

@Component({
  selector: 'sezione-edit',
  templateUrl: "sezione-edit-component.html"
})

export class SezioneEditComponent {
  @Input() name: string;
}