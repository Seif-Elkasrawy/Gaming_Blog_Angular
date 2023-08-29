import { Component, OnInit } from '@angular/core';
import { GamingNewsService } from '../gaming-news.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private service: GamingNewsService) { }

  epicNews: any = [];

  epicNewsCS: any = [];

  ngOnInit(){
    this.service.getEpicNews().subscribe((data: any) => {
      console.log(data);

      this.epicNews = data;
    });

    this.service.getEpicNewsCS().subscribe((data: any) => {
      console.log(data);

      this.epicNewsCS = data;
    });
  }
}