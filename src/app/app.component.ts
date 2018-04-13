import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

import { DestinyCacheService } from './services/destiny-cache.service';
import { BungieService } from './services/bungie.service';
import { AuthService, AuthState, AuthInfo } from './services/auth.service';
import { BungieUserByIdBungieResponse, DestinyGeneralUser, UserInfoCard } from './models/destiny-user';
import { LoggedInUserService } from './services/logged-in-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'A Date With Destiny';

  constructor(private destinyCacheService: DestinyCacheService) { }

  ngOnInit(): void {
    console.log('in AppComponent.ngOnInit, about to load cache');
    this.destinyCacheService.init().then(() => {
      console.log('in AppComponent.ngOnInit, cache loaded');
    });
  }
}
