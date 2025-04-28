export class Episode {
  id: number; //mat-card-content
  name: string; //mat-card-title
  season: number; //mat-subtitle
  number: number; //mat-subtitle
  summary: string; //mat-card-content
  url: string; //mat-button
  image: string; //mat-card-image
  constructor() {
    this.id = 0;
    this.name = '';
    this.season = 0;
    this.number = 0;
    this.summary = '';
    this.url = '';
    this.image = '';
  }
}
