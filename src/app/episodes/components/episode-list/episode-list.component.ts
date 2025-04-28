import { Component, Input} from '@angular/core';
import {Episode} from '../../model/episode.entity';
import {EpisodeItemComponent} from '../episode-item/episode-item.component';

@Component({
  selector: 'app-episode-list',
  standalone: true,
  imports: [
    EpisodeItemComponent
  ],
  templateUrl: './episode-list.component.html',
  styleUrl: './episode-list.component.css'
})
export class EpisodeListComponent {
  @Input() episodes: Array<Episode> = [];
}
