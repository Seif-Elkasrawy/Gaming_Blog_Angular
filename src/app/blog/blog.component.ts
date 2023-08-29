import { Component, OnInit } from '@angular/core';
import { GamingNewsService } from '../gaming-news.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private service: GamingNewsService) { }

  rapidNews: any = [];

  ngOnInit(){
    this.service.getRapidNews().subscribe((data: any) => {
      console.log(data);

      this.rapidNews = data;
    });
  }
}
