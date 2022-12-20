import { Component, OnInit } from '@angular/core';
import { AccueilServiceService } from 'src/app/Services/accueilS/accueil-service.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  monPays: any;

  constructor(private serviceaccueil: AccueilServiceService) { }

  ngOnInit(): void {

    this.serviceaccueil.getPays().subscribe(reponse => {
      this.monPays = reponse;
      console.log(this.monPays);
    });
  }

}
