import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { DataService } from '../data.service';
import { Offer } from '../models/offer.model';
import { Scroll } from '../models/scroll.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  offerData:Offer[] = []
  scrollData:Scroll[] = []
  constructor(private data: DataService) { 
    data.getOfferData().subscribe((response) => {
      this.offerData = response;
  });
  data.getScrollData().subscribe((response) => {
    this.scrollData = response;
});

  }

  ngOnInit() {
  }

}
