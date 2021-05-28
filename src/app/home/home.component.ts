import { LeaderService } from './../services/leader.service';
import { Dish } from './../shared/dish';
import { Component, OnInit, Inject } from '@angular/core';
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
  dishErrMess:any;
  constructor(private dishservice: DishService, private promotionservice: PromotionService,
    private leaderservice:LeaderService,@Inject('BaseURL') public BaseURL:any) { }

  ngOnInit(): void {
    this.dishservice.getFeaturedDish()
    .subscribe((dish) =>this.dish = dish,
    errmess => this.dishErrMess = <any>errmess);
   
    this.promotionservice.getFeaturedPromotion()
   .subscribe((promotion)=>this.promotion = promotion);
    
   this.leaderservice.getFeaturedLeader()
    .subscribe((leader)=>this.leader = leader);
  }

}
