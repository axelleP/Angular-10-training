import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../../environments/environment'
import { map } from 'rxjs/operators'

import { PokemonInterface } from '../interfaces/pokemon.interface'

@Injectable({
    providedIn: 'root'
})

export class PokemonService {
    constructor(private http: HttpClient) {}
    
    /* fonctions pour récupérer les infos depuis l'api 
     * apiBaseUrl : déclaré dans le fichier environment.ts */
    getPokemon(id): Observable<PokemonInterface> {
        return this.http.get(environment.apiBaseUrl + 'pokemon/' + id).pipe(
            map((res: PokemonInterface) => {
                return res
            })
      )
    }

    getCharacteristics(id): Observable<PokemonInterface> {
        return this.http.get(environment.apiBaseUrl + 'characteristic/' + id).pipe(
            map((res: PokemonInterface) => {
                return res
            })
        )
    }

    getSpecies(id): Observable<PokemonInterface> {
        return this.http.get(environment.apiBaseUrl + 'pokemon-species/' + id).pipe(
            map((res: PokemonInterface) => {
                return res
            })
        )
    }
}