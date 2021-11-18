import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interface/pokemon.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  loading:Boolean = false
  pokemon:Pokemon[] = []
  increment:number = 0
  search:string =""
  constructor(private pokemonService:PokemonService) { }

  ngOnInit(): void {
    this.loading= true
     this.pokemonService.getAllPokemon().subscribe( res => {
      this.pokemon = res
      this.loading = false
     } )
  }


  TrackByItem(index, item){
    return item.id
  }
  siguiente(){ 
    this.increment +=5
  }

  atras(){
    if(this.increment > 0){
      this.increment -=5
    }
    
  }

  onsearch(search){
    this.search =search
  }

}
