import { Component, OnInit } from '@angular/core';
import { PhotoBoardService } from './shared/components/photo-board/services/photo-board.service';
import { Observable } from 'rxjs';
import { Photo } from './shared/components/photo-board/interfaces/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Angular testing';
  public photos$: Observable<Photo[]>;

  constructor(private service: PhotoBoardService) { }
  
  public ngOnInit(): void {
    this.photos$ = this.service.getPhotos();
  }
}
