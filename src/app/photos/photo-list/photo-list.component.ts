import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';  
  userName: string;
  page: number = 1;
  hasMore: boolean = true;

  constructor(
    private service: PhotoService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {    
    this.activatedRoute.params.subscribe(params => {
      this.userName = params.userName;
      this.photos = this.activatedRoute.snapshot.data.photos;    
    })
  }

  load() {
    this.service.listFromUserPaginated(this.userName, ++this.page)
      .subscribe(photos => {
        this.filter = '';
        this.photos = this.photos.concat(photos)
        if(!photos.length) this.hasMore = false;
      });
  }

}
