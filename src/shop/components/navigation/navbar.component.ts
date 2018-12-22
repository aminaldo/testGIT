import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'shop-navbar' ,
    templateUrl: 'navbar.component.html' ,
    styleUrls: ['navbar.component.css'] 
})

export class NavbarComponent {
    
    navigations = ['List article', 'new article', 'Recherche', 'deconnexion'] ;

    ngOnInit(){
        
    }
    
}