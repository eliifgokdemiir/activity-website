import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';
import { ClickOutsideDirective } from '../../../../../shared/directives/click-outside.directive';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ThemeService } from '../../../../../core/services/theme.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { LayoutService } from '@/modules/layout/services/layout.service';
import { NavbarComponent } from '../navbar.component';
import { AuthService } from '@/modules/auth/services/auth.service';


@Component({
  selector: 'app-profile-menu',
  templateUrl: './profile-menu.component.html',
  styleUrls: ['./profile-menu.component.scss'],
  standalone: true,
  imports: [ClickOutsideDirective, NgClass, RouterLink, AngularSvgIconModule, NavbarComponent, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          opacity: 1,
          transform: 'translateY(0)',
          visibility: 'visible',
        }),
      ),
      state(
        'closed',
        style({
          opacity: 0,
          transform: 'translateY(-20px)',
          visibility: 'hidden',
        }),
      ),
      transition('open => closed', [animate('0.2s')]),
      transition('closed => open', [animate('0.2s')]),
    ]),
  ],
})
export class ProfileMenuComponent implements OnInit {
  @Input() userProfile: any;  
  public isOpen = false;

  public profileMenu = [
    {
      title: 'Profil',
      icon: './assets/icons/heroicons/outline/user-circle.svg',
      link: '/profile',
    },
    {
      title: 'Ayarlar',
      icon: './assets/icons/heroicons/outline/cog-6-tooth.svg',
      link: '/settings',
    },
    {
      title: 'Çıkış',
      icon: './assets/icons/heroicons/outline/logout.svg',
      link: '/auth',
    },
  ];

  public themeColors = [
    {
      name: 'base',
      code: '#e11d48',
    },
    {
      name: 'yellow',
      code: '#f59e0b',
    },
    {
      name: 'green',
      code: '#22c55e',
    },
    {
      name: 'blue',
      code: '#3b82f6',
    },
    {
      name: 'orange',
      code: '#ea580c',
    },
    {
      name: 'red',
      code: '#cc0022',
    },
    {
      name: 'violet',
      code: '#6d28d9',
    },
  ];

  public themeMode = ['light', 'dark'];

  constructor(public themeService: ThemeService, private layoutService: LayoutService,  private authService: AuthService,
    private router: Router) {}

    ngOnInit(): void {
      // Profil bilgilerini yükle
      this.layoutService.userProfile$.subscribe(profile => {
        if (profile) {
          this.userProfile = profile;
          console.log('Güncel profil:', profile);
        }
      });
  
      // İlk yükleme
      this.layoutService.loadUserProfile();
    }
  
    logout(): void {
      this.authService.logout();
      this.userProfile = null; // Profil bilgilerini temizle
      this.router.navigate(['/auth/sign-in']);
    }
  
  public toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  toggleThemeMode() {
    this.themeService.theme.update((theme) => {
      const mode = !this.themeService.isDark ? 'dark' : 'light';
      return { ...theme, mode: mode };
    });
  }

  toggleThemeColor(color: string) {
    this.themeService.theme.update((theme) => {
      return { ...theme, color: color };
    });
  }

  private loadUserProfile(): void {
    this.layoutService.getUserProfile().subscribe({
      next: (profile) => {
        this.userProfile = profile; 
        console.log('Kullanıcı Profili:', profile);
      },
      error: (err) => {
        console.error('Kullanıcı profili alınamadı:', err);
      },
    });
  }
  toggleProfile() {
    this.router.navigate(['/profile']);
  }

}
