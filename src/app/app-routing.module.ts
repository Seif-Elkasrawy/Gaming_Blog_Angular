import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { BlogComponent } from './blog/blog.component';
import { ForumsComponent } from './forums/forums.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path : "" , component : HomeComponent},
  {path : "games" , component : GamesComponent},
  {path : "blog" , component : BlogComponent},
  {path : "forums" , component : ForumsComponent},
  {path : "contact" , component : ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
