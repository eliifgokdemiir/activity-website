import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SidebarComponent } from '../../../layout/components/sidebar/sidebar.component';
import { NavbarComponent } from '../../../layout/components/navbar/navbar.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-corporate-event',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SidebarComponent,
    NavbarComponent,
    ButtonComponent,
    RouterModule,
    RouterLink
  ],
  templateUrl: './corporate-event.component.html'
})
export class CorporateEventComponent {
  eventForm: FormGroup;
  previewUrl: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      location: ['', Validators.required],
      city: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      image: [null, Validators.required],
      // Kurumsal alanlar
      companyName: ['', Validators.required],
      taxNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      companyAddress: ['', Validators.required],
      contactPerson: ['', Validators.required],
      contactEmail: ['', [Validators.required, Validators.email]],
      contactPhone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      capacity: ['', [Validators.required, Validators.min(1)]],
      sponsorshipOptions: [false],
      sponsorshipDetails: [''],
      eventType: ['', Validators.required],
      catering: [false],
      technicalEquipment: [false]
    });
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

  onSubmit(): void {
    if (this.eventForm.valid) {
      console.log('Form Submitted:', this.eventForm.value);
    } else {
      this.markFormGroupTouched(this.eventForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
} 