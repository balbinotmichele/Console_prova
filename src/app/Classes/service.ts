import { Time } from "./time";

export class Service {
    servizio: string;
    fasce: Time[];

    constructor(name:string, fasce: Time[]) {
        this.servizio = name.charAt(0).toUpperCase() + name.slice(1);
        // this.time.start = start.toLocaleTimeString().substring(0,5);
        // this.time.end = end.toLocaleTimeString().substring(0,5);
        this.fasce = fasce;
    }
}