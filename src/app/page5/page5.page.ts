import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.page.html',
  styleUrls: ['./page5.page.scss'],
})
export class Page5Page implements OnInit {


numeros=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20, 21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];

limit=10;
  constructor() { }

  ngOnInit() {
  }
  popularInfinite(infiniteScrollEvent){
   console.log('carregar mais 10');
   this.limit+=10;
   infiniteScrollEvent.target.complete();
  }

}
