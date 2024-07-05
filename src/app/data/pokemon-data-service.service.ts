import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable, of } from 'rxjs';
import { map, mergeMap, switchMap, toArray } from 'rxjs/operators';
import { Pokemon } from '../interfaces/Pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonDataService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon';
  private pokemonCache: Pokemon[] | null = null; // Modificado para permitir null inicialmente

  constructor(private http: HttpClient) {}

  // Función para obtener la lista de los primeros 151 Pokémon
  fetchPokemonList(): Observable<any[]> {
    return this.http
      .get<any[]>(`${this.baseUrl}?limit=151`)
      .pipe(map((response: any) => response['results']));
  }

  // Función para obtener los detalles de un Pokémon por su URL
  fetchPokemonDetails(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url).pipe(
      map((pokemon: any): Pokemon => {
        
        return {
          name: pokemon.name,
          id: -1,
          image: pokemon.sprites.front_default,
          type: pokemon?.types[0]?.type.name,
          height: pokemon.height,
          weight: pokemon.weight,
          greeting: '',
          number: pokemon.id,
        };
      })
    );
  }

  // Función principal para obtener los detalles de los primeros 151 Pokémon
  fetchAllPokemonDetails(): Observable<Pokemon[]> {
    // Verifica si ya tenemos los datos en caché
    if (this.pokemonCache) {
      // Si los datos están en caché, los retorna como un Observable
      return of(this.pokemonCache);
    } else {
      // Si no hay datos en caché, realiza la solicitud
      return this.fetchPokemonList()
        .pipe(
          switchMap((pokemonList) => {
            const detailRequests = pokemonList.map((pokemon) =>
              this.fetchPokemonDetails(pokemon.url)
            );
            return forkJoin(detailRequests);
          })
        )
        .pipe(
          mergeMap((details) => details), // Aplanar el Observable de Observables
          toArray(), // Recolectar todos los Pokémon en un array
          map((details) => {
            this.pokemonCache = details; // Almacena los detalles en la caché antes de retornarlos
            return details;
          })
        );
    }
  }
}
