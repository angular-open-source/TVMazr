export interface EpisodesResponse {
  episodes: EpisodeResource[];
}

export interface EpisodeResource {
  id: number;
  name: string;
  season: number
  number: number;
  summary: string;
  url: string;
  image: {
    medium: string;
    original: string;
  };
}

//done
