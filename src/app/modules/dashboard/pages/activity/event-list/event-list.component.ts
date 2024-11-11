import { Component, OnInit } from '@angular/core';
import { Activity } from '../../../models/activity';
import { DashboardService } from '../../../services/dashboard.service';
import { CommonModule } from '@angular/common';


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

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    // Example usage: Fetch concerts in a specific city
    this.dashboardService.getActivities('ODTÜ Vişnelik', 'konser').subscribe((activities) => {
      this.activities = activities;
    });
  }
}
