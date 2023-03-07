import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Regions } from 'src/app/Model/RegionModel';
import { RegionSService } from 'src/app/Services/serviceRegion/region-s.service';



@Component({
  selector: 'app-popupaddregion',
  templateUrl: './popupaddregion.component.html',
  styleUrls: ['./popupaddregion.component.css']
})
export class PopupaddregionComponent implements OnInit {

  ObjetRegions : Regions = {
    id_regions: 0,
    nomregions: '',
    coderegion:'',
    activiterregion: '',
    habitant: 0,
    languemregion:'',
    images:'',
  }

  formulaire!:FormGroup
  fichier: any;
  contenu?:String;
  file: any;

  nomRegions: any;
  images: any;
  codeRegions: any;
  langueRegions: any;
  habitantRg: any;
  activiteRegion: any;
 
  id_Regions: any;
  id_Pays!: any;
  
  
  constructor(private regionService:RegionSService,private formB: FormBuilder) { }

  ngOnInit(): void {

    this.formulaire = this.formB.group({
      // id_regions: ["", Validators.required],
      nomregions: ["", Validators.required],
      file: ["", Validators.required],
      habitant: ["", Validators.required],
      coderegion: ["", Validators.required],
      id_pays:["",Validators.required],
      languemregion:["",Validators.required],
      activiterregion:["",Validators.required]
})

    console.log("Regions kadi :"+this.formulaire.value)
}

// ======================================= ICI ON AJOUTE UNE REGION ======================================

fileChang(event: any) {
  this.file = event.target.files[0]
  console.log(event)
}

CreerRegions(){

this.id_Pays = 1;
this.nomRegions = this.formulaire!.get("nomregions")!.value;
this.images = this.formulaire!.get("file")!.value;
this.codeRegions = this.formulaire!.get("coderegion")!.value;
this.langueRegions = this.formulaire!.get("languemregion")!.value;
this.habitantRg = this.formulaire!.get("habitant")!.value;
this.activiteRegion = this.formulaire!.get("activiterregion")!.value;


console.log("ID: "+this.id_Regions+" Nom: " +this.nomRegions+"Images: " +this.images+"Code: " +this.codeRegions+"Activite: " +this.activiteRegion+"Descr: " +this.habitantRg);

 this.regionService.AjouterRegion(this.id_Pays,this.nomRegions,this.codeRegions,this.activiteRegion,this.langueRegions,this.habitantRg,this.file)
  .subscribe(data=>{
    const RegionEnregistrer = data
    console.log("================= "+RegionEnregistrer)
  })
}





    
  }



