import { Categorie } from './categorie.model' ;

export class Article {
    id: number ;
    title : string ;
    description : string ;
    prix : number ;
    quantity : number ;
    photo : string ;
    categorie : Categorie; 
}
