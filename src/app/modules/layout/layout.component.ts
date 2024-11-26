import { Component, OnInit } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationEnd, Router, RouterOutlet, Event } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutService } from './services/layout.service'; 

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  standalone: true,
  imports: [SidebarComponent, NavbarComponent, RouterOutlet, FooterComponent],
})
export class LayoutComponent implements OnInit {
  private mainContent: HTMLElement | null = null;
  userProfile: any = null; 

  constructor(private router: Router, private layoutService: LayoutService) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this.mainContent) {
          this.mainContent!.scrollTop = 0;
        }
      }
    });
  }

  ngOnInit(): void {
    // Kullanıcı profilini dinle
    this.layoutService.userProfile$.subscribe(profile => {
      this.userProfile = profile;
    });
  }
  loadUserProfile(): void {
    this.layoutService.getUserProfile().subscribe({
      next: (profile) => {
        console.log('Kullanıcı Profili:', profile);
        this.userProfile = profile; 
      },
      error: (err) => {
        console.error('Kullanıcı Profili Alınamadı:', err);
      },
    });
  }
}
