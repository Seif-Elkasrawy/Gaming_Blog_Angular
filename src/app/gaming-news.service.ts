import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamingNewsService {

  constructor(private httpClient: HttpClient) { }

  getGamingNews(): any {
    return this.httpClient.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=d9fa182ee9ef44a5a756220c5bcb5a32')
  }

}

