import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Teste Recipe','This is Simply Test','https://cdn.pixabay.com/photo/2015/12/08/00/58/italian-1082230_960_720.jpg'),
    new Recipe('A Teste Recipe','This is Simply Test','https://cdn.pixabay.com/photo/2015/12/08/00/58/italian-1082230_960_720.jpg'),
    new Recipe('A Teste Recipe','This is Simply Test','https://cdn.pixabay.com/photo/2015/12/08/00/58/italian-1082230_960_720.jpg')
  ] 
  constructor() { }

  ngOnInit() {
  }

}
