import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { PokemonResponse } from './pokemon.model';
import { PokemonDetail } from './pokemon-detail.model';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private http = inject(HttpClient);
  private baseUrl = environment.pokeApiUrl || 'https://pokeapi.co/api/v2';

  constructor() { }

  getPokemons(offset: number = 0, limit: number = 20): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(
      `${this.baseUrl}/pokemon?offset=${offset}&limit=${limit}`
    );
  }

  getPokemonDetail(name: string): Observable<PokemonDetail> {
    return this.http.get<PokemonDetail>(`${this.baseUrl}/pokemon/${name}`);
  }

}
