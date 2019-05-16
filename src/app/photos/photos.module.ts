import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { CommonModule } from '@angular/common';
import { PhotosComponent } from './photo-list/photos/photos.component';
import { FilterByDescription } from './filter-by-description.pipe';

@NgModule({
    declarations: [
        PhotoComponent,
        PhotoListComponent,
        PhotoFormComponent,
        PhotosComponent,
        FilterByDescription
    ]
    ,
    imports: [
        HttpClientModule,
        CommonModule
    ]
})
export class PhotosModule {

}