import { Injectable } from "@angular/core";
import { HttpClient  } from '@angular/common/http' ;
import { Article } from "src/shop/models/Article.model";

@Injectable()
export class ArticleService {
    apiRoot = 'http://localhost:8000/api/' ; 
    constructor(private http : HttpClient ){
        
    }

    public getAllArticle(){
        return  this.http.get<Article[]>(this.apiRoot + 'articles') ;
    }

    public createArticle(article : Article){
        return this.http.post(this.apiRoot + 'article' , article) ;
    }

    public onSupprimer(article) {
        return this.http.delete(this.apiRoot +"/article/"+ article.id)
    }
    public onEditer(article : Article){
        return this.http.put(this.apiRoot + '/updateArticle/' , article) ;
    }

}