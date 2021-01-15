import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDKer1QAtvrJ_Yzj7-ZmYyheFQRNUB05mWCZ2yzlG3VQ3TN5E4Sr_KhgEm6vf4P8f_D7Bl0ujbZJflqpxA'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });

  }

}
