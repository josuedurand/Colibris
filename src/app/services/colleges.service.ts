import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CollegesService {

  listeColleges : Array<object>;

  constructor(private http : HttpClient) {
    this.getColleges();
  };

  getColleges(){
    this.http.get<Array<object>>('assets/modele/colleges.json').subscribe(
      (data) => {
        console.log(data);
        this.listeColleges = data;
      }
    );
  };
}
