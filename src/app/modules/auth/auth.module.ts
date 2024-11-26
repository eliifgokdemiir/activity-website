import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthInterceptor } from '@/core/interceptor/auth.interceptor';

@NgModule({ imports: [AuthRoutingModule, AngularSvgIconModule.forRoot(), HttpClientModule],
         providers: [provideHttpClient(withInterceptorsFromDi()),
            {
                provide: HTTP_INTERCEPTORS,
                useClass: AuthInterceptor,
                multi: true
              }
         ],
         schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
         })
export class AuthModule {}
