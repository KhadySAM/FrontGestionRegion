import { Component, OnInit } from '@angular/core';
import { RegionSService } from 'src/app/Services/serviceRegion/region-s.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  mesregions : any;
  p : number = 1;
  id! : number;
  userFilter : any={nomregions: ''};

  

  constructor(private serviceregion : RegionSService) { }

  


  ngOnInit(): void {

      this.serviceregion.getAll().subscribe(reponse => {
        this.mesregions = reponse;
        console.log(this.mesregions);
      });
    
  }
  openModal(nomregion : any, idregion : number) {
    Swal.fire({
      title: nomregion,
      text: "Commfirmer la suppression ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText : "NON",
      confirmButtonText: 'OUI'
    }).then((result) => {
      if (result.isConfirmed) {
        //suppp
        this.serviceregion.deleteById(idregion).subscribe(() => {
        console.log(idregion)
        Swal.fire(
          'Supprimer!',
          'Région supprimé avec succès'
        );
      });

      }
    });

  }

}
