import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  
  getleaders():Leader[] {
    return LEADERS;
    }
    getFeaturedLeader():Leader{
      return LEADERS[3];
    }
    
}
