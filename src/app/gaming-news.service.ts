import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamingNewsService {

  constructor(private httpClient: HttpClient) { 
    
  }

  getGamingNews(): any {
    //return this.httpClient.get('https://api.rawg.io/api/genres?key=9cff31644d4545daa1e416c3a784e879')
    return this.httpClient.get('https://free-epic-games.p.rapidapi.com/free?X-RapidAPI-Key=48bdbc3571msh94ef5f4cb76590cp148103jsn88e9ba0ca5d7')
  }

  

}

