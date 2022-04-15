import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  gifs: any[] =[];
  subscription: Subscription = new Subscription;
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getTrendingGifs();
    this.subscription = this.dataService.getGifs()
    .subscribe((response:any) =>{
      this.gifs = response;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}


