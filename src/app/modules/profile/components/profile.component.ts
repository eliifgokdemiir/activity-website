import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LayoutModule } from '../../layout/layout.module';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../../layout/components/sidebar/sidebar.component';
import { NavbarComponent } from '../../layout/components/navbar/navbar.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { ProfileService } from '../services/profile.service';

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
  userProfile: any = null;
  isLoading = true;

  cities: string[] = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya']; 
  countries: { code: string; name: string }[] = [
    { code: '+90', name: 'Türkiye' },
    { code: '+1', name: 'ABD' },
    { code: '+44', name: 'Birleşik Krallık' },
    { code: '+49', name: 'Almanya' },
  ];

  constructor(private fb: FormBuilder, private profileService: ProfileService) {
    this.initForm();
  }

  ngOnInit(): void {
    this.initForm();
    this.loadUserProfile();
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
  private loadUserProfile(): void {
    this.isLoading = true;
    this.profileService.getUserProfile().subscribe({
      next: (response) => {
        if (response.status && response.data) {
          const profile = response.data;
          console.log('Yüklenen profil:', profile);
          
          // API'den gelen verileri forma doldur
          const names = profile.name?.split(' ') || ['', ''];
          this.profileForm.patchValue({
            firstName: names[0],
            lastName: names.slice(1).join(' '), // Birden fazla soyadı varsa birleştir
            email: profile.email,
            phoneCode: profile.phoneCode || '+90',
            phoneNumber: profile.phoneNumber,
            birthDate: profile.birthDate,
            city: profile.city,
            gender: profile.gender
          });
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Profil bilgileri yüklenirken hata:', error);
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.profileForm.valid) {
      const formData = this.profileForm.value;
      
      // API'ye gönderilecek veriyi hazırla
      const updateData = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phoneCode: formData.phoneCode,
        phoneNumber: formData.phoneNumber,
        birthDate: formData.birthDate,
        city: formData.city,
        gender: formData.gender,
        ...(formData.password && { password: formData.password })
      };

      this.profileService.updateUserProfile(updateData).subscribe({
        next: (response) => {
          console.log('Profil başarıyla güncellendi', response);
          // Başarılı mesajı gösterilebilir
        },
        error: (error) => {
          console.error('Profil güncellenirken hata:', error);
          // Hata mesajı gösterilebilir
        }
      });
    }
  }

  private passwordMatchValidator(g: FormGroup) {
    const password = g.get('password');
    const confirmPassword = g.get('confirmPassword');

    if (password?.value && confirmPassword?.value) {
      return password.value === confirmPassword.value ? null : { 'mustMatch': true };
    }
    return null;
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
