import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { AuthService, AuthInfo } from '../services/auth.service';
import { BungieService } from '../services/bungie.service';
import { LoggedInUserService } from '../services/logged-in-user.service';
import { UserInfoCard } from '../models/destiny-user';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit, OnDestroy {

  authInfo: AuthInfo;
  loggedInUserInfoCard: UserInfoCard;
  loggedIn = true;
  private authChangeSubscription: Subscription;
  isCollapsed = true;

  constructor(private bungieService: BungieService,
    private authService: AuthService,
    private loggedInUserService: LoggedInUserService) {

      console.log('in appnavbarcomponent constructor');
    this.authChangeSubscription = authService.authChange.subscribe(newAuthInfo => {
      this.loggedIn = newAuthInfo.loggedIn;
      this.authInfo = newAuthInfo;
    });
    }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.authChangeSubscription.unsubscribe();
  }

  onLoginClick(): void {
    console.log('clicked login');
    this.authService.login();

    // load bungie user info for logged in user for use in other services
    if (this.authInfo) {
      this.bungieService.getBungieNetUserById(this.authInfo.memberId).subscribe((res) => {
        this.bungieService.searchDestinyPlayer(res.Response.displayName, -1).subscribe((res1) => {
          this.loggedInUserService.loggedInUserInfoCard = res1.Response[0];
          this.loggedInUserInfoCard = res1.Response[0];
        });
      });
    }
  }

  onLogoutClick(): void {
    console.log('clicked logout');
    this.authService.logout();
  }
}
