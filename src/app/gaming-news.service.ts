import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamingNewsService {

  constructor(private httpClient: HttpClient) { 
    
  }

  headers = new HttpHeaders({
    'x-rapidapi-host': 'epic-free-games.p.rapidapi.com',
    'x-rapidapi-key': '48bdbc3571msh94ef5f4cb76590cp148103jsn88e9ba0ca5d7'
  });

  getRapidNews(): any {
    return this.httpClient.get('https://epic-free-games.p.rapidapi.com/epic-free-games', {headers: this.headers});
  }

  getGamingNews(): any {
    return this.httpClient.get('https://api.rawg.io/api/genres?key=9cff31644d4545daa1e416c3a784e879');
    //return this.httpClient.get('https://free-epic-games.p.rapidapi.com/free?X-RapidAPI-Key=48bdbc3571msh94ef5f4cb76590cp148103jsn88e9ba0ca5d7')
  }

  

}

