import { Component, Input } from '@angular/core';
import {Episode} from '../../model/episode.entity';
import {MatCardModule} from '@angular/material/card';
import {MatCardTitle} from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatCardImage } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-episode-item',
  standalone: true,
  imports: [
    MatCardModule,
    MatCardTitle,
    MatCardContent,
    MatCardImage,
    MatButtonModule
  ],
  templateUrl: './episode-item.component.html',
  styleUrl: './episode-item.component.css'
})
export class EpisodeItemComponent {
  @Input() episode !: Episode;

  constructor() {}
}
