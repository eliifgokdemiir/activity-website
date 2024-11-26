import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobilecomponent';
import { ProfileMenuComponent } from './profile-menu/profile-menu.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LayoutService } from '../../services/layout.service';
import { AuthService } from '@/modules/auth/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: true,
    imports: [
        AngularSvgIconModule,
        NavbarMenuComponent,
        ProfileMenuComponent,
        NavbarMobileComponent,
        CommonModule //bunu eklemeyi unutma !önemli!
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavbarComponent implements OnInit {
  userProfile: any = null;
  loading = false;
  error: string | null = null;

  constructor(
    private menuService: MenuService,
    private layoutService: LayoutService
  ) {}

  ngOnInit(): void {
    this.loadUserProfile();
  }


  private loadUserProfile(): void {
    this.layoutService.userProfile$.subscribe(profile => {
      if (profile) {
        this.userProfile = profile;
      }
    });
  }
  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = !this.menuService.showMobileMenu;
  }


}
