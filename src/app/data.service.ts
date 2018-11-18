import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Offer } from './models/offer.model';
import { Scroll } from './models/scroll.model';

import { Observable }   from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  
  getOfferData(): Observable<Offer[]> {
    return this.http.get<Offer[]>('http://localhost:3001/api/offerData');
  }
  getScrollData(): Observable<Scroll[]> {
    return this.http.get<Offer[]>('http://localhost:3001/api/scrollData');
  }
}