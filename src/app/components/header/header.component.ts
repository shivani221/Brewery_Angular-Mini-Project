import { Component, OnInit } from '@angular/core';
import { BucketservService } from 'src/app/service/bucketserv.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // public  totalBeers : number = 0;
  constructor(public bucketService : BucketservService) { }

  ngOnInit(): void {
    //   this.totalBeers = res.length;
  }

}
