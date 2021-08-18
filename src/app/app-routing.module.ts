import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeersComponent } from './components/beers/beers.component';
import { BillingFormComponent } from './components/billing-form/billing-form.component';
import { BucketComponent } from './components/bucket/bucket.component';

const routes: Routes = [
  {path: '', redirectTo: 'beers', pathMatch: 'full'},
  {path: 'beers', component: BeersComponent},
  {path: 'bucket', component: BucketComponent},
  {path: 'billingform', component: BillingFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
