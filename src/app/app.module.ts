import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { BungieService } from './services/bungie.service';
import { DestinyCacheService } from './services/destiny-cache.service';
import { ParseService } from './services/parse.service';
import { LoggedInUserService } from './services/logged-in-user.service';
import { AuthComponent } from './auth/auth.component';
import { CharactersComponent } from './characters/characters.component';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { PublicMilestonesComponent } from './public-milestones/public-milestones.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    CharactersComponent,
    HomeComponent,
    InventoryComponent,
    PublicMilestonesComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [AuthService, BungieService, DestinyCacheService, ParseService, LoggedInUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
