import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';
import { NullViewportScroller } from '@angular/common/src/viewport_scroller';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input()
  photos: Photo[] = [];

  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos) this.rows = this.groupedColumns(this.photos);
  }

  private groupedColumns(photos: Photo[]): any[] {
    let newRows = [];

    for (let index = 0; index < photos.length; index+=3) {
      newRows.push(photos.slice(index,index+3))      
    }

    return newRows;
  }
  
}
