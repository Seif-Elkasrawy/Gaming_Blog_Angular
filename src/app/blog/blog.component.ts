import { Component, OnInit } from '@angular/core';
import { GamingNewsService } from '../gaming-news.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private service: GamingNewsService) { }

rapidNews :any =[]
gameSpotArticles :any = []
gameReviews :any = []

  

  ngOnInit(){
    this.service.getArticles().subscribe((data: any) => {
      console.log(data.response.results.game);
      this.gameSpotArticles = data.response.results.game
    });
  }
  
}
