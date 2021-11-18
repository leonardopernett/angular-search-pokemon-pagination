import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    PokemonListComponent,
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[PokemonListComponent]
})
export class PokemonModule { }
