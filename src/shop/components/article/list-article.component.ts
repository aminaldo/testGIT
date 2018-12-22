import { Component, OnInit } from "@angular/core";
import { ArticleService } from "src/shop/services/article/article.service";
import { Article } from "src/shop/models/Article.model";
import { Router } from "@angular/router";

@Component({
    selector: 'shop-list-article' ,
    templateUrl: './list-article.component.html',
    styleUrls: [ './list-article.component.css' ]
 })
export class ListArticleComponent implements OnInit{
    
    articles : Article[] ;
    constructor(private articleService: ArticleService, private router : Router){
        
    }  

    ngOnInit(){
        this.articleService.getAllArticle().subscribe( 
            (data : Article[]) => {
                 console.log(data) ;
                this.articles = data ;
            } ,
            (error : any) => {
                console.log('erreur: ', error) ;
            }
         ) ;
    }

    onSupprimer(article: Article):void{
        this.articleService.onSupprimer(article)
        .subscribe( data => {
          this.articles = this.articles.filter(u => u !== article);
    });
    }

    onEditer(article : Article){
        localStorage.setItem('article', JSON.stringify(article) ) ;
        this.router.navigate(['/edit-article']) ;
    }

   
    creerArticle(article : Article){
        localStorage.setItem('article', JSON.stringify(article) ) ;
        this.router.navigate(['/add-article']) ;
    } 
    
}