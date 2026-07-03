import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ToastxComponent } from './components/general/toastx-component/toastx-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastxComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('app-scrap');
}
