import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Categorie } from "src/shop/models/categorie.model";


@Injectable()
export class CategoryService {
    apiRoot = 'http://localhost:8000/api/' ; 
    constructor(private http : HttpClient ){
        
    }

    public getAllCategory(){
        // return  this.http.get<Category>(this.apiRoot + 'category') ;
    }

}