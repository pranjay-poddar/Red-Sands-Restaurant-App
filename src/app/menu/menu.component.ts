import { DishService } from './../services/dish.service';
import { Dish } from '../shared/dish';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
dishes!:Dish[];
selectedDish: any;
  constructor(private dishService : DishService) {}

  ngOnInit() {
    this.dishService.getDishes()
    .then(dishes => this.dishes = dishes);
  }
onSelect(dish : Dish){
  this.selectedDish=dish;
}
}
