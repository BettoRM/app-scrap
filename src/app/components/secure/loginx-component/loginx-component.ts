import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Componentes propios
import { BtnlodComponent } from '../../general/btnlod-component/btnlod-component';
import { timeout, finalize } from 'rxjs';
// Interfaces
import { ILogin } from '../../../interfaces/ILogin';
import { IResponse } from '../../../interfaces/IResponse';
// Servicios
import { LoginService } from '../../../services/login-service';
import { ToastService } from '../../../services/toast-service';

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

  // Variables
  showSpin = signal(false);

  // Objetos
  formData: ILogin = {
    usuario: '',
    clave: '',
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
        next: (res: IResponse) => {
              this.toast.show('Sesión Iniciada', 'success');
        },
        error: (err) => {
          console.log(err);
        },
      });
  };
}
