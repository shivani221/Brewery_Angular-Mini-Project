import { Component, OnInit } from '@angular/core';
import { BucketservService } from 'src/app/service/bucketserv.service';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {

  minusButtonIsValid = false;
  public beers : any = [];
  constructor(public bucketService : BucketservService) { }

  ngOnInit(): void {
    this.bucketService.getBeers().subscribe(res => {
      this.beers = res;
      this.bucketService.grandTotal = this.bucketService.getTotalPrice();
    })
  }

  removeBeer(beer: any){
    this.bucketService.removeBucketItem(beer);
  }

  emptybucket(){
    this.bucketService.emptyTheCart();
  }

  quantityPlus(mybeer : any){
    this.beers.map((beer : any) => {
      if(beer == mybeer){
        beer.quantity += 1;
        beer.total += beer.abv;
        this.bucketService.totalBeers += 1;
        this.bucketService.grandTotal = this.bucketService.getTotalPrice();
      }
    })
  }

  quantityMinus(mybeer : any){
    this.beers.map((beer : any) => {
      if(beer == mybeer){
        if(beer.quantity == 1){
          this.removeBeer(mybeer);  
        }
        else{
          beer.quantity -= 1;
          beer.total -= beer.abv;
          this.bucketService.grandTotal = this.bucketService.getTotalPrice();
          this.bucketService.totalBeers -= 1;
        }
      }
    })
  }
}
