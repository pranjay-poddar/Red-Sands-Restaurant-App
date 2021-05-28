import { DishService } from './../services/dish.service';
import { Dish } from '../shared/dish';
import { Component, OnInit, Inject } from '@angular/core';
import { flyInOut , expand} from '../animations/animation';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class MenuComponent implements OnInit {
dishes !:Dish[];
selectedDish : any;
errMess !: string;
  constructor(private dishService : DishService,
    @Inject('BaseURL') public BaseURL:any) {}

  ngOnInit() {
    this.dishService.getDishes()
    .subscribe(dishes => this.dishes = dishes,
      errmess => this.errMess = <any>errmess);
    
  }

  
onSelect(dish : Dish){
  this.selectedDish=dish;
}
}
