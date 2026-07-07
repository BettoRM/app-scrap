import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ToastxComponent } from './components/general/toastx-component/toastx-component';
import { ConfirmComponent } from './components/general/confirm-component/confirm-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastxComponent, ConfirmComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('app-scrap');
}
