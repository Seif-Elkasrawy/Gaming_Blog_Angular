import { Component, OnInit } from '@angular/core';
import { GamingNewsService } from '../gaming-news.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private sanitizer: DomSanitizer, private service: GamingNewsService) { }

  epicNews: any = [];
  epicNewsCS: any = [];

  gamingNews: any = [];

  gameReviews: any = [];

  ngOnInit() {
    // API Call

    this.service.getEpicNews().subscribe((data: any) => {
      console.log(data);
      this.epicNews = data;
      for (let i = 0; i< this.epicNews.length ;i++){
        this.epicNews[i].originalPrice =(this.epicNews[i].originalPrice/100).toFixed(2)
      }
    
    });

    this.service.getEpicNewsCS().subscribe((data: any) => {
      console.log(data);

      this.epicNewsCS = data;
      for (let i = 0; i< this.epicNewsCS.length ;i++){
        this.epicNewsCS[i].originalPrice =(this.epicNewsCS[i].originalPrice/100).toFixed(2)
      }
    });

    this.service.getGamingNews().subscribe((data: any) => {
      console.log(data);

      this.gamingNews = data.results;
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
