import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AccueilServiceService {

  constructor(private http : HttpClient) { }

  public getPays() {
    return this.http.get('http://localhost:8080/projet/odk/Pays/liste')
  }
}
