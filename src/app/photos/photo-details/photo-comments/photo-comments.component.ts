import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs/operators';


import { PhotoService } from '../../photo/photo.service';
import { PhotoComment } from '../../photo/photo-comment';
@Component({
    selector: 'ap-photo-comments',
    templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit {

    @Input() photoId: number;
    commentForm: FormGroup;

    comments$: Observable<PhotoComment[]>;

    constructor(private photoService: PhotoService,
        private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.comments$ = this.photoService.getComments(this.photoId);
        this.commentForm = this.formBuilder.group({
            comment: ['', Validators.maxLength(300)]
        })
    }

    save() {
        const commentText = this.commentForm.get('comment').value as string;
        this.comments$ = this.photoService.addComment(this.photoId, commentText)
            .pipe(switchMap(() => this.photoService.getComments(this.photoId)))
            .pipe(tap(() => this.commentForm.reset()));
    }


}