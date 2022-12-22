import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionSService {

  constructor(private http : HttpClient) { }

  public getAll() {
    return this.http.get('http://localhost:8080/projet/odk/Regions/liste');
    
  }


  url="http://localhost:8080/projet/odk/Regions/supprimer"
  public deleteById(id:number) {
    return this.http.delete(`${this.url}/${id}`);
    
  }

  // AJOUTER UNE REGIONS ICI

AjouterRegion(id_pays:any, nomregions:string,coderegion:string,habitant:any,activiterregion:string,languemregion:string,file:any):Observable<any>{
  let data =new FormData();
  data.append("id_pays", id_pays);
  data.append("coderegion",coderegion);
  data.append("activiterregion",activiterregion);
  data.append("nomregions",nomregions);
  data.append("habitant",habitant);
  data.append("languemregion",languemregion);
  
  data.append("file",file)
  return this.http.post(`http://localhost:8080/projet/odk/Regions/ajouterRegion`,data);
}

// // AJOUTER UNE REGIONS ICI

// AjouterRegion(id_pays:any, nomregions:string,coderegion:string,activiterregion:string,superficieregion:string,languemregion:string,description:string,file:any):Observable<any>{
//   let data =new FormData();
//   data.append("id_pays", id_pays);
//   data.append("coderegion",coderegion);
//   data.append("activiterregion",activiterregion);
//   data.append("superficieregion",superficieregion);
//   data.append("languemregion",languemregion);
//   data.append("description",description);
//   data.append("file",file)
//   return this.http.post(http://localhost:8080/projet/odk/Regions/ajouterRegion,data);
// }
  

}

