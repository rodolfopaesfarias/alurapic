import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';

  constructor(
    private photoService: PhotoService,
    private activatedRoot: ActivatedRoute    
    ) { }

  ngOnInit(): void {

    const userName = this.activatedRoot.snapshot.params.userName;
    this.photoService
      .listFromUser(userName)
      .subscribe(photos => this.photos = photos);
  }

}
