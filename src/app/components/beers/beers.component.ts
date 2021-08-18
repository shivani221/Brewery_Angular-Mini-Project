import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { BucketservService } from 'src/app/service/bucketserv.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  public beerList : any [] = [];
  public permanentBeerList : any[] = [];
  searchbeer : string = '';
  searcheditems : any [] = [];

  constructor(private api : ApiService, private bucketService : BucketservService) { }

  ngOnInit(): void {
    this.api.getBeer().subscribe(res => {
      this.beerList = res;

      this.beerList.forEach((a: any) => {
        Object.assign(a, {quantity: 1, total: a.abv});
      });
      this.permanentBeerList = this.beerList;
    })
  }
  addtobucket(item: any){
    this.bucketService.addToBucket(item);
  }

  searchbeerbyname(){
    this.searcheditems = [];
    this.beerList = this.permanentBeerList;
    this.searcheditems = this.beerList.filter((a : any) => a.name.toLowerCase().includes( this.searchbeer.toLowerCase()));
    this.beerList = this.searcheditems;
  }

}
