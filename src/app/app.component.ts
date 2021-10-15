import { Component } from '@angular/core';
import { Article } from './article/article.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    
  }
  articles: Article[]
  constructor() {
    this.articles =[
   
    ]
   }




  
 add_article(title: HTMLInputElement, link: HTMLInputElement){
   this.articles.push(new Article(title.value, link.value))
   title.value = ""
   link.value = ""

 }
}
