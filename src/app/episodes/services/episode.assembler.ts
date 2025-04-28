import {EpisodesResponse, EpisodeResource} from './episode.response';
import {Episode} from '../model/episode.entity';

export class EpisodeAssembler {
    static toEntitiesFromResponse(response: EpisodesResponse): Episode[] {
      if (Array.isArray(response)) {
        return response.map(episode => this.toEntityFromResource(episode));
      }

      // Si la respuesta tiene una propiedad episodes que es un array
      if (response && response.episodes && Array.isArray(response.episodes)) {
        return response.episodes.map(episode => this.toEntityFromResource(episode));
      }

      return [];
    }
    static toEntityFromResource(episode: EpisodeResource): Episode {
      return {
        id: episode.id,
        name: episode.name,
        season: episode.season,
        number: episode.number,
        summary: episode.summary || '',
        url: episode.url,
        image: episode.image && episode.image.medium ? episode.image.medium : ''
      }
    }
}
//done
