import {Component, inject, OnInit} from '@angular/core';
import { EpisodeListComponent } from './episodes/components/episode-list/episode-list.component';  // Importar componente de lista de episodios
import { FooterComponent } from './public/components/footer/footer.component';  // Importar el footer
import { ToolBarComponent} from './public/components/tool-bar/tool-bar.component';
import {Episode} from './episodes/model/episode.entity';
import { ShowsApiService} from './episodes/services/shows-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Asegúrate de que esto esté configurado si estás usando componentes standalone en Angular
  imports: [
    EpisodeListComponent,
    FooterComponent,
    ToolBarComponent
  ],  // Importar los componentes dentro del componente raíz
})
export class AppComponent implements OnInit{
  episodes: Episode[] = [];

  title = 'TVMaze App';  // Título de la aplicación
  private showService = inject(ShowsApiService)

  ngOnInit() {
    this.showService.getEpisodes().subscribe((data: Episode[]) => {
      this.episodes = data;
      console.log(this.episodes);
    });
  }
}
