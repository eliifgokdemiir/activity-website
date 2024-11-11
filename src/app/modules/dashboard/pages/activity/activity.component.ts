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
      CommonModule
    ],
})
export class ActivityComponent implements OnInit {
  activities: Activity[] = [];

  constructor(private dashboardService: DashboardService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // URL parametresinden type'ı oku ve etkinlikleri yükle
    this.route.queryParams.subscribe(params => {
      const type = params['type'];
      if (type) {
        this.loadActivities(type);
      }
    });
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
}
