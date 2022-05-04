import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WithdrawalsComponent } from './components/withdrawals/withdrawals.component';
import { ConsultComponent } from './components/consult/consult.component';
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'consults', component: ConsultComponent},
  {path: 'WithdrawalsComponent', component: WithdrawalsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
