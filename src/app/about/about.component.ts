import { LEADERS } from './../shared/leaders';
import { LeaderService } from './../services/leader.service';
import { Component, OnInit ,Inject} from '@angular/core';
import { flyInOut, expand } from '../animations/animation';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
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
export class AboutComponent implements OnInit {
leaders:any;
  constructor(private leaderService:LeaderService,@Inject('BaseURL') public BaseURL:any) { }

  ngOnInit(): void {
    this.leaderService.getleaders()
    .subscribe(leaders => this.leaders = leaders);
  }

}
