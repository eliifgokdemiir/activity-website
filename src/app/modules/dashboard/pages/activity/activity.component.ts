import { Component, OnInit } from '@angular/core';
import { Activity } from '../../models/activity';
import { ActivityAuctionsTableComponent } from '../../components/activity/activity-auctions-table/activity-auctions-table.component';
import { ActivityChartCardComponent } from '../../components/activity/activity-chart-card/activity-chart-card.component';
import { ActivitySingleCardComponent } from '../../components/activity/activity-single-card/activity-single-card.component';
import { ActivityDualCardComponent } from '../../components/activity/activity-dual-card/activity-dual-card.component';
import { ActivityHeaderComponent } from '../../components/activity/activity-header/activity-header.component';
import { DashboardService } from '../../services/dashboard.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
      FormsModule
    ],
})
export class ActivityComponent implements OnInit {
  activities: Activity[] = [];
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

  constructor(private dashboardService: DashboardService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadAllActivities();
    
    this.route.queryParams.subscribe(params => {
      const type = params['type'];
      if (type) {
        this.loadActivities(type);
      }
    });
  }
  filterByCity() {
    if (!this.selectedCity) {
      this.loadAllActivities();
    } else {
      this.dashboardService.getActivities(this.selectedCity).subscribe((activities) => {
        this.activities = activities;
        console.log(`Loaded activities for city ${this.selectedCity}:`, activities);
      });
    }
  }
  goToCategory(type: string) {
    
    this.dashboardService.getActivities(undefined, type).subscribe((activities) => {
      this.activities = activities;
      console.log(`Activities for type ${type}:`, activities);
    });

    this.router.navigate([type], { relativeTo: this.route });
  }
  loadActivities(type: string) {
    this.dashboardService.getActivities(undefined, type).subscribe((activities) => {
      this.activities = activities;
      console.log(`Loaded activities for type ${type}:`, activities);
    });
  }
  loadAllActivities() {
    this.dashboardService.getAllActivities().subscribe((activities) => {
      this.activities = activities;
      console.log('Loaded all activities:', activities);
    });
  }
}
