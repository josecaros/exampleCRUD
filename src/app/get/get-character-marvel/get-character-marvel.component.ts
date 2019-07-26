import { Component, OnInit } from '@angular/core';
import { MarvelServiceService } from 'src/app/services/marvel-service.service';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-get-character-marvel',
  templateUrl: './get-character-marvel.component.html',
  styleUrls: ['./get-character-marvel.component.css']
})
export class GetCharacterMarvelComponent implements OnInit {

  characters: Character[];
  constructor(private marvelService: MarvelServiceService) { }

  ngOnInit() {
  }

  getListCharacters(){
    this.marvelService.getCharacters().subscribe((charFromAPI: any)=>{
      this.characters= charFromAPI.data.results;
      console.log(this.characters);
    },(err:any)=>{
      console.error(err);
    })
  }

}
