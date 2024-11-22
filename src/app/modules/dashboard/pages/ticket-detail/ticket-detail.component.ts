import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Activity } from '../../models/activity';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  standalone: true,
  imports: [CommonModule],
  styles: [`
    :host {
      display: block;
      height: 100vh;
      overflow: auto;
    }

    .custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: rgba(155, 155, 155, 0.5) transparent;
    }
    
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: rgba(155, 155, 155, 0.5);
      border-radius: 20px;
      border: transparent;
    }
  `]
})
export class TicketDetailComponent implements OnInit {
  activity?: Activity;
  activeTab: 'tickets' | 'artist' | 'rules' = 'tickets';
  selectedTicketType?: string;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    private router: Router
  ) {}

  ngOnInit() {
    const activityId = this.route.snapshot.paramMap.get('id');
    if (activityId) {
      this.loadActivityDetails(activityId);
    }
  }

  loadActivityDetails(id: string) {
    this.loading = true;
    this.dashboardService.getActivityById(id).subscribe({
      next: (activity) => {
        this.activity = activity;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading activity details:', error);
        this.loading = false;
      }
    });
  }
  setActiveTab(tab: string) {
    if (tab === 'tickets' || tab === 'artist' || tab === 'rules') {
      this.activeTab = tab as 'tickets' | 'artist' | 'rules';
    }
  }

  selectTicketType(type: string) {
    this.selectedTicketType = type;
  }
  goBack(){
    this.router.navigate(['/']);
  }
} 