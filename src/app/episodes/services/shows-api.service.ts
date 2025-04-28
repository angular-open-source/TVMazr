import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {EpisodeAssembler} from './episode.assembler';
import {Episode} from '../model/episode.entity';
import {EpisodesResponse} from './episode.response';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowsApiService {
  private baseUrl = environment.showsProviderApiBaseUrl;
  private episodesEndpoint = environment.showsProviderSourcesEndpointPath;
  constructor(private http: HttpClient) {
    console.log('URL completa:', `${this.baseUrl}${this.episodesEndpoint}`);
  }

  getEpisodes(): Observable<Episode[]> {
    return this.http.get<EpisodesResponse> (`${this.baseUrl}${this.episodesEndpoint}`
    ).pipe(
      map(response => EpisodeAssembler.toEntitiesFromResponse(response))
    )
  }
}

//done
