import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];

  constructor(private spotify: SpotifyService) { }

  ngOnInit(): void {
  }

  //utilizamos el metodo del servicio para recibir los artistas.
  buscar( termino: string ):void {
    this.spotify.getArtista(termino)
    .subscribe( (data:any) => {
      this.artistas = data;
    })
  }

}
