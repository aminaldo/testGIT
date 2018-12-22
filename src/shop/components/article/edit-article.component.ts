import { Component, OnInit } from "@angular/core";
import { Article } from "src/shop/models/Article.model";
import { ArticleService } from "src/shop/services/article/article.service";
import { Categorie } from "src/shop/models/categorie.model";


@Component({
    selector: 'shop-edit-article' ,
    templateUrl: 'edit-article.component.html' ,
    styleUrls: ['edit-article.component.css'] 
}) 

export class EditArticleComponent implements OnInit{
    article : Article ;
    category : Categorie[] ;
    constructor(private articleService : ArticleService){
        
    }

    ngOnInit(){
        console.log("redirection effectuéé") ;
        this.article = JSON.parse( localStorage.getItem('article')) ;
        this.category= [ 
            { id:1, nom: "ALIMENTAIRE" } ,
            { id:2, nom: "ELECTROMENAGER" } ,
            { id:3, nom: "OUTILLAGE" } 
         ] ;
    }

}