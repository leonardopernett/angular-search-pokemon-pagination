import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FetchAllPokemon, Pokemon } from '../interface/pokemon.interface';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url:string = "https://pokeapi.co/api/v2"
  constructor(private http:HttpClient) { }


   public getAllPokemon(){
     return this.http.get<FetchAllPokemon>(`${this.url}/pokemon?limit=50`)
                .pipe(
                   map(this.smallPokemon)
                )
   }

   private smallPokemon(res:FetchAllPokemon){

     return res.results.map(poke => {
        const id  = poke.url.split('/')[6]
        const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`
        return { 
          id,
          name:poke.name,
          pic:pic       
         }
     })
   }
   
}
