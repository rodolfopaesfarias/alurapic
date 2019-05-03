import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {url: 'https://img.elo7.com.br/product/original/1A24C05/passaro-calopsita-em-resina-passaros-para-decorar.jpg',
     description: 'Calopsita'},
    {url: 'https://i.ytimg.com/vi/dASPUwsqbuA/hqdefault.jpg',
     description: 'Papagaio'}     
  ]

}
