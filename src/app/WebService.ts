import { Bus } from './Classes/bus';
import { Parent } from './Classes/parent';
import { Teacher } from './Classes/teacher';
import { Kid } from "./Classes/kid";

import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { School } from "./Classes/school";

@Injectable()
export class WebService {
  private schoolUrl = 'api/school'
  private headers = new Headers({'Content-Type': 'application/json'});

  school : School;
  
  constructor(private http : Http) {}

  getData(): Promise<School[]> {
    return this.http.get(this.schoolUrl).toPromise().then(x=>x.json().data)
  }

  getSchool(id: string) : Promise<School> {
    const url = `${this.schoolUrl}/${id}`;
     return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as School)
    .catch(this.handleError);
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

  add(schoolId: string, item : any) : Promise<School> {
    var sch;
    if (item instanceof Teacher) {
      const url = `${this.schoolUrl}/${schoolId}`
      return this.getSchool(schoolId).then(tmp => {
        tmp.teachers.push(item); 
        return this.http.put(url, JSON.stringify(tmp), {headers: this.headers}).toPromise().then(() => tmp).catch(this.handleError);
      });
    }
    else if (item instanceof Bus) {
      const url = `${this.schoolUrl}/${schoolId}`
      return this.getSchool(schoolId).then(tmp => {
        tmp.buses.push(item); 
        return this.http.put(url, JSON.stringify(tmp), {headers: this.headers}).toPromise().then(() => tmp).catch(this.handleError);
      });
    }
  }
}