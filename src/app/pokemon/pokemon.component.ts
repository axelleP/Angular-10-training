import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { PokemonInterface } from './interfaces/pokemon.interface'
import { PokemonService } from './services/pokemon.service'

//initialisation
@Component({
    selector: 'pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss'],
    providers: [PokemonService]
})

export class PokemonComponent implements OnInit {
    //les variables que l'on peut utiliser dans la vue
    pokemon: PokemonInterface;
    characteristics: PokemonInterface;
    species: PokemonInterface;
    @Input() id: number = 1;

    constructor(
        private pokemonService: PokemonService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        /* affecte les valeurs dans les variables grâce aux fonctions dans pokemon.service.ts */
        
        //var pokemon : données pokémon
        this.pokemonService.getPokemon(this.id).subscribe((pokemon: PokemonInterface) => {
            console.log('pokemon', pokemon);
            this.pokemon = pokemon
        })

        //var characteristics : caractéristique du pokémon
        this.pokemonService.getCharacteristics(this.id).subscribe((characteristics: PokemonInterface) => {
            console.log('characteristics', characteristics);
            this.characteristics = characteristics
        })

        //var species : espèce du pokémon
        this.pokemonService.getSpecies(this.id).subscribe((species: PokemonInterface) => {
            console.log('species', species);
            this.species = species
        })
    }
    
    getPokemon() {
        console.log('id : ' + this.id);
        if (this.id !== null) {
            this.ngOnInit();
        }
    }
}