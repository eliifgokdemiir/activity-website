
import { Component, OnInit } from '@angular/core';
import { Activity } from '../../../models/activity';
import { DashboardService } from '../../../services/dashboard.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  standalone: true,
  imports: [
    CommonModule
  ],
})
export class EventListComponent implements OnInit {
  activities: Activity[] = [];

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const type = params.get('type');
      if (type) {
        this.loadActivities(type);
      }
    });
  }

  loadActivities(type: string, city?: string) {
    this.dashboardService.getActivities(city, type).subscribe((activities) => {
      this.activities = activities;
      console.log('Loaded Activities:', activities); 
    });
  }
}
