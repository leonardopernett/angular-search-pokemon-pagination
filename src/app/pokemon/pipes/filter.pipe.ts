import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../interface/pokemon.interface';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(pokemons: Pokemon[], pages:number = 0, search): Pokemon[] {
  if(search.length ==0){
       return pokemons.slice(pages, pages + 5);
  }
  if(search < 4){
     return pokemons
  }
  return pokemons.filter((poke) => poke.name.includes(search))
  
  }

}
