import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
 
})
export class DataService {

url:string = "https://rickandmortyapi.com/api/character/1";
character:any;
id:any;
data:any;

  constructor(private http:HttpClient) { }
getCharacter():Observable<Object>{
  return this.http.get(`${this.url}`)
}

logCharacter(){
   this.getCharacter().subscribe((res) => {
    this.id = JSON.stringify(res);
    this.data = JSON.parse(this.id)
    this.character = {
      name:this.data.name,
      species:this.data.species,
      image:this.data.image,
      episode:this.data.episode
    }
   })
}

}
