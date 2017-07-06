import { Component, Input } from '@angular/core';
import { Time } from "../../../app/Classes/time";

@Component({
  selector: 'orario-edit',
  templateUrl: "orario-edit-component.html"
  // `
  //   <ion-card *ngIf="fascia">
  //     <ion-card-header>
  //         {{fascia.name}}
  //     </ion-card-header>
  //     <ion-card-content>
  //         <ion-list>
  //             <ion-item>
  //                 <ion-input [(ngModel)]="fascia.name"></ion-input>
  //             </ion-item>
  //         </ion-list>
  //         <ion-item>
  //             <ion-label>Da</ion-label>
  //             <ion-datetime displayFormat="hh:mm" pickerFormat="hh mm" [(ngModel)]="fascia.start"></ion-datetime>
  //         </ion-item>
  //         <ion-item>
  //             <ion-label>A</ion-label>
  //             <ion-datetime displayFormat="hh:mm" pickerFormat="hh mm" [(ngModel)]="fascia.end"></ion-datetime>
  //         </ion-item>
  //     </ion-card-content>
  //   </ion-card>
  // `
})

export class OrarioEditComponent {
  @Input() fascia: Time;
}