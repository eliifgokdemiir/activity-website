import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LayoutModule } from '../../layout/layout.module';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../layout/components/sidebar/sidebar.component';
import { NavbarComponent } from '../../layout/components/navbar/navbar.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    FormsModule, 
    LayoutModule, 
    CommonModule, 
    ReactiveFormsModule, 
    SidebarComponent, 
    NavbarComponent, 
    ButtonComponent
  ],
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  profileForm!: FormGroup;
  submitted = false;

  cities: string[] = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya']; 
  countries: { code: string; name: string }[] = [
    { code: '+90', name: 'Türkiye' },
    { code: '+1', name: 'ABD' },
    { code: '+44', name: 'Birleşik Krallık' },
    { code: '+49', name: 'Almanya' },
  ];

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  ngOnInit(): void {
    this.loadUserData();
  }

  private initForm(): void {
    this.profileForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phoneCode: ['+90'],
      phoneNumber: ['', [
        Validators.required, 
        Validators.pattern(/^[0-9]{10}$/)
      ]],
      birthDate: ['', Validators.required],
      city: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', [
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
      ]],
      confirmPassword: ['']
    }, {
      validators: this.passwordMatchValidator
    });
  }

  private passwordMatchValidator(g: FormGroup) {
    const password = g.get('password');
    const confirmPassword = g.get('confirmPassword');

    if (password?.value && confirmPassword?.value) {
      return password.value === confirmPassword.value ? null : { 'mustMatch': true };
    }
    return null;
  }

  private loadUserData(): void {
    const userData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phoneCode: '+90',
      phoneNumber: '5551234567',
      birthDate: '1990-01-01',
      city: 'İstanbul',
      gender: 'Male'
    };

    this.profileForm.patchValue(userData);
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.profileForm.valid) {
      console.log('Form Submitted', this.profileForm.value);
      
      const formData = { ...this.profileForm.value };
      if (!formData.password) {
        delete formData.password;
        delete formData.confirmPassword;
      }

      console.log('Clean Form Data:', formData);
    } else {
      Object.keys(this.profileForm.controls).forEach(key => {
        const control = this.profileForm.get(key);
        if (control?.invalid) {
          control.markAsTouched();
        }
      });
    }
  }

  get f() {
    return this.profileForm.controls;
  }

  hasError(controlName: string, errorName: string): boolean {
    const control = this.profileForm.get(controlName);
    return ((control?.errors?.[errorName]) && (control.dirty || control.touched || this.submitted)) ?? false;
  }

  isFieldInvalid(controlName: string): boolean {
    const control = this.profileForm.get(controlName);
    return ((control?.invalid) && (control.dirty || control.touched || this.submitted)) ?? false;
  }
}
