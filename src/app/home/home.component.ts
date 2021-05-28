import { LeaderService } from './../services/leader.service';
import { Dish } from './../shared/dish';
import { Component, OnInit, Inject } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { flyInOut, expand } from '../animations/animation';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
export class HomeComponent implements OnInit {
  dish: any;
  promotion: any;
  leader:any;
  dishErrMess:any;
  promotionErrMess:any;
  leaderErrMess:any;
  constructor(private dishservice: DishService, private promotionservice: PromotionService,
    private leaderservice:LeaderService,@Inject('BaseURL') public BaseURL:any) { }

  ngOnInit(): void {
    this.dishservice.getFeaturedDish()
    .subscribe((dish) =>this.dish = dish,
    errmess => this.dishErrMess = <any>errmess);
   
    this.promotionservice.getFeaturedPromotion()
   .subscribe((promotion)=>this.promotion = promotion,
   errmess => this.promotionErrMess = <any>errmess);
    
   this.leaderservice.getFeaturedLeader()
    .subscribe((leader)=>this.leader = leader,
    errmess => this.leaderErrMess = <any>errmess);

  }

}
