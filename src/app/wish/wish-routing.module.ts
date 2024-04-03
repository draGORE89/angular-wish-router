import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishComponent } from './wish.component';
import { authGuard } from 'src/shared/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: WishComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishRoutingModule { }
