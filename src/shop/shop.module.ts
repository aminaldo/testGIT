import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' ;
import { RouterModule, Routes } from '@angular/router' ;

import { ShopComponent } from './shop.component';
import { ListArticleComponent } from './components/article/list-article.component';
import { EditArticleComponent } from './components/article/edit-article.component';
import {  AddArticleComponent } from './components/article/add-article.component';
import { ArticleService } from './services/article/article.service';
import { NavbarComponent } from './components/navigation/navbar.component';



const shopRoutes : Routes = [
    { path: '',  component: ListArticleComponent },
    { path: 'edit-article', component: EditArticleComponent } ,
    { path: 'add-article', component:  AddArticleComponent } ,
    
] ;

@NgModule({
  declarations: [
    ShopComponent,
    ListArticleComponent,
    EditArticleComponent,
    NavbarComponent,
    AddArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(shopRoutes)
  ],
  providers: [
    ArticleService
  ],
  bootstrap: [ShopComponent]
})
export class ShopModule { }
