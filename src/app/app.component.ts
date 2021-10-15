import { Component } from '@angular/core';
import { Article } from './article/article.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[]
  constructor() {
    this.articles =[
      new Article('Angular', 'http://angular.io', 3),
      new Article('fullstack', 'http://fullstack.io', 2),
      new Article('Angular homepage', 'http://angular.io', 1),
    ]
   }




  
 add_article(title: HTMLInputElement, link: HTMLInputElement){
   console.log(title.value)

 }
}
