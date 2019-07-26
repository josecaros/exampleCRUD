import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class MarvelServiceService {
  baseUrl = environment.marvelURL;
  key= environment.marvelKey;
  constructor(private http: HttpClient) { }

  getCharacters(): Observable<any>{
    const url=this.baseUrl+'characters?apikey='+this.key+'&limit=30';
    return this.http.get<any>(url);
  }

}
