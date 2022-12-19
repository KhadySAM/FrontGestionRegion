import { Component, OnInit } from '@angular/core';
import { RegionSService } from 'src/app/Services/serviceRegion/region-s.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  mesregions : any;

  constructor(private serviceregion : RegionSService) { }

  ngOnInit(): void {

      this.serviceregion.getAll().subscribe(reponse => {
        this.mesregions = reponse;
        console.log(this.mesregions);
      });
    
  }

  // listeRegion() {
  //   console.log(this.mesregions)
  // }

}
