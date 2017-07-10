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
    
  // addTeacher(teacher: Teacher) {
  //   // return this.http.post(this.teacherUrl, JSON.stringify({teac})) //da finire
  // }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

  addTeacher(school: School, item : Teacher) : Promise<Teacher> {
    return this.http

    .post(
      this.schoolUrl, 
    JSON.stringify(item), 
    { headers: this.headers })

    .toPromise()
    .then(res => res.json().data as Teacher)
    .catch(this.handleError);
  }
}