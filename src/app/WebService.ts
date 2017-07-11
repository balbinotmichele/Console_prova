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

  addTeacher(schoolId: string, item : Teacher) : Promise<School> {
    var sch;
    const url = `${this.schoolUrl}/${schoolId}`
    this.getSchool(schoolId).then(tmp => {this.school = tmp; this.school.teachers.push(item); });
    console.log(this.school);
    console.log(JSON.stringify(this.school));
    return this.http.put(url, JSON.stringify(this.school), {headers: this.headers}).toPromise().then(() => this.school).catch(this.handleError);
  }
}