import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LayoutModule } from '../../layout/layout.module';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../layout/components/sidebar/sidebar.component';
import { NavbarComponent } from '../../layout/components/navbar/navbar.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule, LayoutModule, CommonModule, ReactiveFormsModule, SidebarComponent, NavbarComponent],
  templateUrl: './profile.component.html',
 
})
export class ProfileComponent {
  profileForm: FormGroup;
  cities: string[] = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya']; 
  countries: { code: string; name: string }[] = [
    { code: '+90', name: 'Türkiye' },
    { code: '+1', name: 'ABD' },
    { code: '+44', name: 'Birleşik Krallık' },
    { code: '+49', name: 'Almanya' },
  ];

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneCode: ['+90', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      birthDate: ['', Validators.required],
      city: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Form Submitted', this.profileForm.value);
    }
  }
}
