import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PublicMilestonesComponent } from './public-milestones/public-milestones.component';
import { AuthComponent } from './auth/auth.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CharactersComponent } from './characters/characters.component';
import { InventoryComponent } from './inventory/inventory.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'publicMilestones', component: PublicMilestonesComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'bungie_user/:memberId', component: UserInfoComponent },
  { path: 'characters/:membershipType/:memberId', component: CharactersComponent },
  { path: 'inventory/:membershipType/:memberId', component: InventoryComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
