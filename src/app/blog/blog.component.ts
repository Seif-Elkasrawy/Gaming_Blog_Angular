import { Component, OnInit } from '@angular/core';
import { GamingNewsService } from '../gaming-news.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private service: GamingNewsService,private sanitizer: DomSanitizer) { }

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
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
