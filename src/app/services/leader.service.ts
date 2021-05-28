import { Leader } from './../shared/leader';
import { Injectable } from '@angular/core';
import { LEADERS } from '../shared/leaders';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { catchError,map } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private http: HttpClient,private processHttpmsgService: ProcessHttpmsgService) { }
  
  getleaders():Observable<Leader[]> {
    return this.http.get<Leader[]>(baseURL + 'leadership').pipe(catchError(this.processHttpmsgService.handleError));
    }
    getLeader(id:string):Observable<Leader>{
    
      return this.http.get<Leader>(baseURL + 'leadership/' + id).pipe(catchError(this.processHttpmsgService.handleError));

    }
    getFeaturedLeader():Observable<Leader>{
      return this.http.get<Leader[]>(baseURL + 'leadership?featured=true').pipe(map(leaders => leaders[0])).pipe(catchError(this.processHttpmsgService.handleError));
    }
    
}
