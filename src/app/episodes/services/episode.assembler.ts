import {EpisodesResponse, EpisodeResource} from './episode.response';
import {Episode} from '../model/episode.entity';

export class EpisodeAssembler {
    static toEntitiesFromResponse(response: EpisodesResponse): Episode[] {
      return response.episodes.map(episode => this.toEntityFromResource(episode))
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
