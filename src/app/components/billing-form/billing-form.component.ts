import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BucketservService } from 'src/app/service/bucketserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.css']
})
export class BillingFormComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup = new FormGroup({
    uname: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]*')]),
    emailid: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl('', [Validators.pattern("[7-9][0-9]{9}")]),
    address: new FormControl('', [Validators.required])
  })

  get aForm() {
    return this.loginForm.controls
  }

  constructor(public bucketService: BucketservService, private route: Router) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
  }

  emptybucket() {
    this.bucketService.emptyTheCart();
  }

  emptybucketandhome() {
    this.bucketService.emptyTheCart();
    this.route.navigate(['/beers']);
  }
}
