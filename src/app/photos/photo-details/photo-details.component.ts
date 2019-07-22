import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { PhotoComment } from '../photo/photo-comment';

@Component({
    templateUrl: './photo-details.component.html'    
})
export class PhotoDetailsComponent implements OnInit {

    photo$: Observable<Photo>;

    constructor(private route: ActivatedRoute,
         private photoService: PhotoService) { }

    ngOnInit(): void {
        const id = this.route.snapshot.params.photoId;
        this.photo$ = this.photoService.findById(id);
    }

}