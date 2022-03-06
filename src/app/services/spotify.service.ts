import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//esto lo importa para filtrar los datos recibidos desde la api
//normalmente se reciben mil datos y no necesitamos esos.
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer <Token Here>'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {

    //aqui estamos utilizando el map que importamos arriba y es lo que hacemos 
    //con el .map. es como hacer un filter y le decimos solo dame los items dentro de albums.
    return this.getQuery('browse/new-releases?limit=20')
            .pipe( map ( data => data['albums'].items));

  }

  getArtistas( termino:string ) {

   /*  const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDbWDhpkHxm2s95cZChGjMCGtGiPFBxUqRzPrBG1w9EiAUR81acoryi8OQadEASb_R_uqWrHFoblQ7xkXs'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers })
      .pipe( map ( data => data['artists'].items ));
  }
  lo hacemos mas optimo para no repetir codigo
 */

  return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
         .pipe ( map ( data => data['artists'].items));
  }

  getArtista( id:string ) {
 
   return this.getQuery(`artists/${id}`);
          //.pipe ( map ( data => data['artists'].items));
   }


  getTopTracks( id:string ) {
 
   return this.getQuery(`artists/${id}/top-tracks?country=us`)
          .pipe ( map ( data => data['tracks']));
   }
}
