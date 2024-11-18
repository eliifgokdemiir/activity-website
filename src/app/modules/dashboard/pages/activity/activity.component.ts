import { Component, OnInit } from '@angular/core';
import { Activity } from '../../models/activity';
import { ActivityAuctionsTableComponent } from '../../components/activity/activity-auctions-table/activity-auctions-table.component';
import { ActivityChartCardComponent } from '../../components/activity/activity-chart-card/activity-chart-card.component';
import { ActivitySingleCardComponent } from '../../components/activity/activity-single-card/activity-single-card.component';
import { ActivityDualCardComponent } from '../../components/activity/activity-dual-card/activity-dual-card.component';
import { ActivityHeaderComponent } from '../../components/activity/activity-header/activity-header.component';
import { DashboardService } from '../../services/dashboard.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from 'src/app/modules/layout/components/sidebar/sidebar.component';
import { NavbarComponent } from 'src/app/modules/layout/components/navbar/navbar.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
    selector: 'app-activity',
    templateUrl: './activity.component.html',
    standalone: true,
    imports: [
      ActivityHeaderComponent,
      ActivityDualCardComponent,
      ActivitySingleCardComponent,
      ActivityChartCardComponent,
      ActivityAuctionsTableComponent,
      CommonModule,
      FormsModule,
      RouterModule,
      SidebarComponent,
      NavbarComponent,
      ButtonComponent
    ],
})
export class ActivityComponent implements OnInit {
  activities: Activity[] = [];
  filteredActivities: Activity[] = [];
  cities: string[] = [
    'Adana', 'Adıyaman', 'Afyonkarahisar', 'Ağrı', 'Aksaray', 'Amasya', 'Ankara', 'Antalya', 'Ardahan', 'Artvin',
    'Aydın', 'Balıkesir', 'Bartın', 'Batman', 'Bayburt', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur',
    'Bursa', 'Çanakkale', 'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Düzce', 'Edirne', 'Elazığ', 'Erzincan',
    'Erzurum', 'Eskişehir', 'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkâri', 'Hatay', 'Iğdır', 'Isparta', 'İstanbul',
    'İzmir', 'Kahramanmaraş', 'Karabük', 'Karaman', 'Kars', 'Kastamonu', 'Kayseri', 'Kilis', 'Kırıkkale', 'Kırklareli',
    'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 'Manisa', 'Mardin', 'Mersin', 'Muğla', 'Muş',
    'Nevşehir', 'Niğde', 'Ordu', 'Osmaniye', 'Rize', 'Sakarya', 'Samsun', 'Siirt', 'Sinop', 'Sivas',
    'Şanlıurfa', 'Şırnak', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Uşak', 'Van', 'Yalova', 'Yozgat', 'Zonguldak'
  ];
  
  selectedCity: string = ''; 
  searchTerm: string = ''; 

  constructor(
    private dashboardService: DashboardService, 
    private router: Router, 
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // URL'den type parametresini al
    this.route.params.subscribe(params => {
      const type = params['type'];
      if (type) {
        this.loadActivities(type);
      } else {
        this.loadAllActivities();
      }
    });
  }
  

  filterByCity() {
    if (!this.selectedCity) {
      this.loadAllActivities();
    } else {
      this.dashboardService.getActivities(this.selectedCity).subscribe({
        next: (activities) => {
          this.activities = activities;
          this.filteredActivities = activities;
          console.log(`Loaded activities for city ${this.selectedCity}:`, activities);
        },
        error: (error) => {
          console.error('Error loading activities by city:', error);
        }
      });
    }
  }

  goToCategory(type: string) {
    this.router.navigate(['/etkinlikler', type]);
  }

  loadActivities(type: string) {
    this.dashboardService.getActivities(undefined, type).subscribe({
      next: (activities) => {
        this.activities = activities;
        this.filteredActivities = activities;
        console.log(`Loaded activities for type ${type}:`, activities);
      },
      error: (error) => {
        console.error('Error loading activities:', error);
      }
    });
  }

  loadAllActivities() {
    this.dashboardService.getAllActivities().subscribe({
      next: (activities) => {
        this.activities = activities;
        this.filteredActivities = activities;
        console.log('Loaded all activities:', activities);
      },
      error: (error) => {
        console.error('Error loading all activities:', error);
      }
    });
  }

  filterBySearch() {
    if (!this.searchTerm.trim()) {
      this.filteredActivities = this.activities;
    } else {
      this.applySearchFilter();
    }
  }

  private applySearchFilter() {
    const searchTerm = this.searchTerm.toLowerCase().trim();
    this.filteredActivities = this.activities.filter(activity =>
      activity.title?.toLowerCase().includes(searchTerm) ||
      activity.type?.toLowerCase().includes(searchTerm) ||
      activity.location?.toLowerCase().includes(searchTerm)
    );
  }
}
