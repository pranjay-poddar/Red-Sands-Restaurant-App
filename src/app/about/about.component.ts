import { LEADERS } from './../shared/leaders';
import { LeaderService } from './../services/leader.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
lead:any;
  constructor(private leaderService:LeaderService) { }

  ngOnInit(): void {
    this.lead = this.leaderService.getleaders();
  }

}
