import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BucketservService {

  public totalBeers: number = 0;
  public grandTotal : number = 0;
  public bucketItemList: any = []
  public beersList = new BehaviorSubject<any>([])

  constructor() { }

  getBeers() {
    return this.beersList.asObservable();
  }

  setBeers(beer: any) {
    this.bucketItemList.push(...beer);
    this.beersList.next(beer);
  }

  addToBucket(beer: any) {
    if (!this.bucketItemList.includes(beer)) {
      this.bucketItemList.push(beer);
      this.beersList.next(this.bucketItemList);
      this.getTotalPrice();
    }
    else {
      beer.quantity += 1;
      beer.total += beer.abv;
    }
    this.totalBeers += 1;
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.bucketItemList.map((a: any) => {
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeBucketItem(beer: any) {
    this.totalBeers -= beer.quantity;
    this.bucketItemList.map((a: any, index: any) => {
      if (beer.id === a.id) {
        this.bucketItemList.splice(index, 1);
      }
    })
    this.beersList.next(this.bucketItemList);
  }

  emptyTheCart() {
    this.bucketItemList = [];
    this.beersList.next(this.bucketItemList);
    this.totalBeers = 0;
  }

}
