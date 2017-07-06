import { Kid } from "./Classes/kid";

import { Injectable }    from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { School } from "./Classes/school";

@Injectable()
export class WebService {
  private schoolUrl = 'api/school'

  constructor(private http : Http) {}

  getData(): Promise<School> {
    return this.http.get(this.schoolUrl).toPromise().then(x=>x.json().data)
  }

  getKid(id: string): Promise<Kid> {
    const url = `${this.schoolUrl}/${id}`;
    return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Kid)
        .catch(this.handleError);
    }
 
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}