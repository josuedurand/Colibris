import { Component, OnInit} from '@angular/core';
import { UtilisateursService } from '../services/utilisateurs.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  droit : number;

  constructor(public lUtilisateurs: UtilisateursService) { 
    console.log(this.droit);
  }

  ngOnInit() { }

  showSubmit(o){
    console.log(o);
  }

  viewUsers(index){
    this.droit = index;
    for (let i = 0; i < this.lUtilisateurs.listeUtilisateurs.length; i++) {
      const element = this.lUtilisateurs.listeUtilisateurs[i];
      if(element.profil[0].droit === this.droit){
        element.view = true;
      } else {
        element.view = false;
      };
    };
  };

}
