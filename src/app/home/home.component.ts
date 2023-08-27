import { Component, OnInit } from '@angular/core';
import { GamingNewsService } from '../gaming-news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private service: GamingNewsService) { }

  gamingNews : any = [];

  ngOnInit(): void {
    this.service.getGamingNews().subscribe((data: any) => {
      console.log(data)
    })
  }

}
