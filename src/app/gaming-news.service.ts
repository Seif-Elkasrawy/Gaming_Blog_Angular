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
    'X-RapidAPI-Host': 'epic-free-games.p.rapidapi.com',
    'X-RapidAPI-Key': 'd49d51ad85msh8f5a2031164d357p1b6087jsnbc11e69f5d80 '
  });


  getEpicNews(): any {
    return this.httpClient.get(  'https://epic-free-games.p.rapidapi.com/epic-free-games'
    , {headers: this.headers});
  }

  getEpicNewsCS(): any {
    return this.httpClient.get('https://epic-free-games.p.rapidapi.com/epic-free-games-coming-soon', {headers: this.headers});
  }

  getGamingNews(): any {
    return this.httpClient.get('https://api.rawg.io/api/games?key=9cff31644d4545daa1e416c3a784e879');
  }

  getArticles():any {
    return this.httpClient.get('https://mocki.io/v1/1c020d3f-7c91-45d0-ac7f-52f876a4e2d5')
  }
  
  getReviews() :any {
    return this.httpClient.get('https://mocki.io/v1/3832ccbb-63f7-4b61-aee9-4a18cee283f4')
  }
  

  

}

