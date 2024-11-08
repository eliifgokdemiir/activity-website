import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../layout/components/sidebar/sidebar.component';
import { LayoutModule } from '../../layout/layout.module';
import { NavbarComponent } from '../../layout/components/navbar/navbar.component';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LayoutModule, SidebarComponent, NavbarComponent], // CommonModule import edildi
  templateUrl: './create-event.component.html',
})
export class CreateEventComponent {
  showIndividualEventForm = false;
  showCorporateEventForm = false;
  previewUrl: string | ArrayBuffer | null = null;

  openIndividualEventForm() {
    this.showIndividualEventForm = true;
    this.showCorporateEventForm = false;
  }

  openCorporateEventForm() {
    this.showCorporateEventForm = true;
    this.showIndividualEventForm = false;
  }

  closeForms() {
    this.showIndividualEventForm = false;
    this.showCorporateEventForm = false;
    this.previewUrl = null;
  }

  onFileSelected(event: Event): void {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
