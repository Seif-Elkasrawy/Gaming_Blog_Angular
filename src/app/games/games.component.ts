import { Component, OnInit } from '@angular/core';
import { GamingNewsService } from '../gaming-news.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit{

  constructor(private sanitizer: DomSanitizer, private service : GamingNewsService) {}

  ngOnInit(): void {
    this.service.getReviews().subscribe((data: any) => {
      console.log(data.response.results.review);

      this.gameReviews = data.response.results.review
    });
  }

  gameReviews : any = [];

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}

}
