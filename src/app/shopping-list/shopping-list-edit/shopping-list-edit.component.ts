import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../recipe/ingredient.model';
import { IngredientService } from '../../ingredient.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(private ingredientService: IngredientService) { }

  ngOnInit() {
    this.ingredients = this.ingredientService.getIngredients();
  }

}
