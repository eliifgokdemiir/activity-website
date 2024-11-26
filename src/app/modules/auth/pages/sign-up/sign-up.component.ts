import { Component, OnInit } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterLink, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SignUpRequestModel } from '../../models/sign-up-request.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    AngularSvgIconModule,
    ButtonComponent,
    CommonModule,
    HttpClientModule
  ],
})
export class SignUpComponent implements OnInit {
  form!: FormGroup; 
  submitted = false; 
  errorMessage: string | null = null; 
  loading = false; 

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _authService: AuthService,
    private readonly _router: Router
  ) {}

  ngOnInit(): void {
    this.form = this._formBuilder.group({
      username: ['', [Validators.required]], 
      email: ['', [Validators.required, Validators.email]], 
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]], 
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue], 
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = null;
  
    if (this.form.invalid) {
      return;
    }
  
    const { password, confirmPassword } = this.form.value;
    if (password !== confirmPassword) {
      this.errorMessage = 'Şifreler uyuşmuyor.';
      return;
    }
  
    this.loading = true;
  
    const registerData: SignUpRequestModel = {
      username: this.form.value.username,
      password: this.form.value.password,
      email: this.form.value.email,
      name: this.form.value.name,
      surname: this.form.value.surname,
      age: Number(this.form.value.age),
      phoneNumber: this.form.value.phoneNumber
    };
  
    this._authService.register(registerData).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status) {
          console.log('Kayıt başarılı:', response.message);
          // Başarılı kayıt sonrası giriş sayfasına yönlendir
          this._router.navigate(['/auth/sign-in']);
        } else {
          this.errorMessage = response.message;
        }
      },
      error: (err) => {
        this.loading = false;
        console.error('Kayıt hatası:', err);
        if (err.error?.message) {
          this.errorMessage = err.error.message;
        } else {
          this.errorMessage = 'Kayıt sırasında bir hata oluştu.';
        }
      }
    });
  }
}
