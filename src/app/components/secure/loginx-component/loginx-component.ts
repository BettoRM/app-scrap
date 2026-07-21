import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// Componentes propios
import { BtnlodComponent } from '../../general/btnlod-component/btnlod-component';
import { timeout, finalize } from 'rxjs';
// Interfaces
import { ILogin, ILoginResponse } from '../../../interfaces/ILogin';
import { IResponse } from '../../../interfaces/IResponse';
// Servicios
import { LoginService } from '../../../services/login-service';
import { ToastService } from '../../../services/toast-service';
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-loginx-component',
  imports: [FormsModule, BtnlodComponent],
  templateUrl: './loginx-component.html',
  styleUrl: './loginx-component.css',
})
export class LoginxComponent {
  // Servicios
  private loginService = inject(LoginService);
  private toast = inject(ToastService);
  private router = inject(Router);
  private authService = inject(AuthService);

  // Variables
  showSpin = signal(false);

  // Objetos
  formData: ILogin = {
    usuario: 'orlenisma@hotmail.com',
    clave: '12345',
  };

  login = () => {
    this.showSpin.set(true);
    this.loginService
      .queryLogin(this.formData)
      .pipe(
        timeout(5000),
        finalize(() => this.showSpin.set(false)),
      )
      .subscribe({
        next: (res: IResponse<ILoginResponse[]>) => {
          this.toast.show(res.message, 'success');
          this.authService.setLoggedIn(res.data[0].usuario);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.toast.show(err.message, 'error');
        },
      });
  };
}
