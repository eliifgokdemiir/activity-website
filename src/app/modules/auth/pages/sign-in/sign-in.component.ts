import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, AngularSvgIconModule, NgClass, NgIf, ButtonComponent, HttpClientModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class SignInComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  passwordTextType!: boolean;
  errorMessage: string | null = null;
  loading = false; 

  constructor(private readonly _formBuilder: FormBuilder, private readonly _router: Router, private readonly _authService: AuthService) {}


  ngOnInit(): void {
    this.form = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  togglePasswordTextType() {
    this.passwordTextType = !this.passwordTextType;
  }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = null;

    if (this.form.invalid) {
      return;
    }

    const { email, password } = this.form.value;
    this.loading = true;

    const loginData = {
      username: email,
      password: password
    };

    this._authService.login(loginData).subscribe({
      next: (response) => {
        this.loading = false;
        if (response.status && response.data.access_token) {
          // Başarılı giriş
          console.log('Giriş başarılı:', response.message);
          this._router.navigate(['/']);
        } else {
          // API başarılı yanıt verdi ama token yok
          this.errorMessage = response.message || 'Giriş başarısız. Lütfen bilgilerinizi kontrol edin.';
        }
      },
      error: (err) => {
        console.error('Giriş hatası:', err);
        this.loading = false;
        if (err.status === 401) {
          this.errorMessage = 'Kullanıcı adı veya şifre hatalı.';
        } else {
          this.errorMessage = err.error?.message || 'Giriş yapılırken bir hata oluştu.';
        }
      },
    });
  }
  navigateToSignUp() {
    this._router.navigate(['/auth/sign-up']);
  }
}
