import { LeaderService } from './../services/leader.service';
import { Dish } from './../shared/dish';
import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish: any;
  promotion: any;
  leader:any;
  constructor(private dishservice: DishService, private promotionservice: PromotionService,private leaderservice:LeaderService) { }

  ngOnInit(): void {
    this.dishservice.getFeaturedDish()
    .then((dish) =>this.dish = dish )
    this.promotionservice.getFeaturedPromotion()
   .then((promotion)=>this.promotion = promotion);
    this.leaderservice.getFeaturedLeader()
    .then((leader)=>this.leader = leader)
  }

}
