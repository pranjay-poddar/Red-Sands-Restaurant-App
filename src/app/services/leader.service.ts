import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  
  getleaders():Promise<Leader[]> {
    return Promise.resolve(LEADERS);
    }
    getLeader(id:string):Promise<Leader>{
      return Promise.resolve(LEADERS.filter((leader)=>(leader.id===id))[0]);
    }
    getFeaturedLeader():Promise<Leader>{
      return Promise.resolve(LEADERS.filter((leader) => leader.featured)[0]);
    }
    
}
