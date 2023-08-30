import { Component, OnInit } from '@angular/core';
import { GamingNewsService } from '../gaming-news.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private service: GamingNewsService) { }

  gameSpotArticles: any = [];
  gameReviews: any = [];

  ngOnInit() {

    this.service.getArticles().subscribe((data: any) => {
      console.log(data.response.results.article);

      this.gameSpotArticles = data.response.results.article
    });

    this.service.getReviews().subscribe((data: any) => {
      console.log(data.response.results.review);

      this.gameReviews = data.response.results.review
    });


  }
}
